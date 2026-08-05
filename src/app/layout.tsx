import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jalan Milik Bersama",
  description:
    "Kampanye edukasi untuk budaya berkendara yang aman, berempati, dan pilihan transportasi yang lebih bijak.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${sourceSans.variable} ${newsreader.variable} antialiased`}>
        <a href="#konten-utama" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-sun px-4 py-3 font-bold text-ink shadow-xl transition focus:translate-y-0">
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
