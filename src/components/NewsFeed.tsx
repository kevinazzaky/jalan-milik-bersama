"use client";

import { ArrowRight, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { NewsArticle } from "@/lib/news";

type NewsFeedProps = {
  articles: NewsArticle[];
  isLive: boolean;
  updatedAt: string;
};

export default function NewsFeed({ articles, isLive, updatedAt }: NewsFeedProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(articles.length / 3));
  const visibleArticles = Array.from({ length: Math.min(3, articles.length) }, (_, index) => {
    const articleIndex = (page * 3 + index) % articles.length;
    return articles[articleIndex];
  });

  const showMore = () => setPage((current) => (current + 1) % pageCount);

  return (
    <section id="berita" className="border-y border-ink/8 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Jalan kita hari ini.</h2>
          </div>
          <div className="max-w-md">
            <p className="leading-7 text-ink/70">Artikel aktual dari feed ANTARA agar pembahasan tidak berhenti sebagai teori.</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-xs font-bold text-forest">
              <span className={`size-2 rounded-full ${isLive ? "animate-pulse bg-sky-500" : "bg-amber-500"}`} />
              {isLive ? `Feed aktif · terbaru ${updatedAt}` : "Mode cadangan · feed sedang tidak tersedia"}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <a key={`${page}-${article.href}`} href={article.href} target="_blank" rel="noreferrer" className={`group flex flex-col overflow-hidden border-t-2 border-ink/15 bg-white pt-4 transition hover:border-forest ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mint">
                <Image src={article.image} alt={`Foto artikel: ${article.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-forest/75">
                  <span>{article.source}</span><span className="size-1 rounded-full bg-forest/25" /><time>{article.date}</time>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-[-.025em]">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{article.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest">Baca sumber asli <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs leading-5 text-ink/60">Feed diperiksa setiap lima menit dan dirotasi otomatis setiap hari. Hak cipta materi tetap dimiliki penerbit.</p>
          {articles.length > 3 && (
            <button type="button" onClick={showMore} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-forest/20 bg-mint px-5 py-2.5 text-sm font-bold text-forest transition hover:border-forest/40 hover:bg-sky-100">
              <RefreshCw size={15} /> Muat berita lain
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
