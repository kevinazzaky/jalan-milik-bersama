import { news as fallbackNews } from "@/data/content";

export type NewsArticle = {
  title: string;
  summary: string;
  source: string;
  date: string;
  href: string;
  image: string;
  timestamp?: number;
};

const feeds = [
  "https://www.antaranews.com/rss/otomotif.xml",
  "https://www.antaranews.com/rss/ekonomi.xml",
  "https://www.antaranews.com/rss/nasional.xml",
  "https://www.antaranews.com/rss/metro.xml",
];

const relevantTopic = /transportasi|lalu lintas|jalan raya|keselamatan|berkendara|angkutan|bus|brt|kereta|pedestrian|sepeda|kendaraan listrik|mobilitas|kemacetan|emisi/i;

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getTag(item: string, tag: string) {
  const escapedTag = tag.replace(":", "\\:");
  const match = item.match(new RegExp(`<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`, "i"));
  return match ? decodeXml(match[1].trim()) : "";
}

function cleanText(value: string) {
  return decodeXml(value)
    .replace(/<img[^>]*>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseFeed(xml: string): NewsArticle[] {
  return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .map((match) => {
      const item = match[1];
      const title = cleanText(getTag(item, "title"));
      const description = cleanText(getTag(item, "content:encoded") || getTag(item, "description"));
      const href = cleanText(getTag(item, "link"));
      const published = cleanText(getTag(item, "pubDate"));
      const image = item.match(/<enclosure[^>]+url="([^"]+)"/i)?.[1] ?? item.match(/<media:content[^>]+url="([^"]+)"/i)?.[1] ?? "";
      const timestamp = Date.parse(published);

      return {
        title,
        summary: description.length > 165 ? `${description.slice(0, 162).trim()}...` : description,
        source: "ANTARA News",
        date: Number.isNaN(timestamp)
          ? published
          : new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" }).format(timestamp),
        href,
        image: decodeXml(image),
        timestamp: Number.isNaN(timestamp) ? 0 : timestamp,
      };
    })
    .filter((article) => article.title && article.href && article.image && relevantTopic.test(`${article.title} ${article.summary}`));
}

export async function getLatestNews() {
  try {
    const responses = await Promise.all(
      feeds.map((url) => fetch(url, { next: { revalidate: 300 }, headers: { "User-Agent": "JalanMilikBersama/1.0" } })),
    );
    const xmlFeeds = await Promise.all(responses.filter((response) => response.ok).map((response) => response.text()));
    const liveArticles = xmlFeeds
      .flatMap(parseFeed)
      .sort((a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0))
      .filter((article, index, articles) => articles.findIndex((item) => item.href === article.href) === index);

    // Rotate the starting article each day so the section remains fresh even
    // when publishers have not released a new transport story that day.
    const freshPool = liveArticles.slice(0, 9);
    const jakartaDay = Math.floor((Date.now() + 7 * 60 * 60 * 1000) / 86_400_000);
    const offset = freshPool.length ? (jakartaDay * 3) % freshPool.length : 0;
    const rotatedArticles = [...freshPool.slice(offset), ...freshPool.slice(0, offset)];
    const articles: NewsArticle[] = [...rotatedArticles];
    for (const fallback of fallbackNews) {
      if (articles.length >= 9) break;
      if (!articles.some((article) => article.href === fallback.href)) articles.push(fallback);
    }

    return {
      articles: articles.slice(0, 9),
      isLive: liveArticles.length > 0,
      updatedAt: liveArticles[0]?.date ?? "Sumber tersimpan",
    };
  } catch {
    return { articles: fallbackNews, isLive: false, updatedAt: "Sumber tersimpan" };
  }
}
