import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
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
      <body className={`${dmSans.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
