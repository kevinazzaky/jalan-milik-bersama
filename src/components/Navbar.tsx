"use client";

import { Menu, Route, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Belajar", "#masalah"],
  ["Cek Diri", "#cek-diri"],
  ["Data", "#data"],
  ["Kuis", "#kuis"],
  ["Berita", "#berita"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 32);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 ${scrolled ? "pt-3" : "pt-4"}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-6 ${scrolled ? "border-white/60 bg-white/90 text-ink shadow-lg shadow-slate-950/5" : "border-white/10 bg-white/[.06] text-white"}`}>
        <a href="#beranda" className="flex items-center gap-3 font-display font-bold tracking-[-0.03em]">
          <span className={`grid size-9 place-items-center rounded-xl text-white ${scrolled ? "bg-forest" : "bg-white/15"}`}>
            <Route size={19} />
          </span>
          <span>Jalan Milik Bersama</span>
        </a>

        <div className="hidden items-center gap-2 text-sm font-semibold md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={`rounded-full px-4 py-2 transition ${scrolled ? "hover:bg-mint hover:text-forest" : "text-white/75 hover:bg-white/10 hover:text-white"}`}>{label}</a>
          ))}
        </div>

        <a href="#aksi" className="hidden rounded-full bg-gradient-to-r from-blue-600 to-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 md:block">
          Ambil Peran
        </a>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid size-10 place-items-center rounded-xl border md:hidden ${scrolled ? "border-ink/10" : "border-white/15 text-white"}`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <div className="absolute left-4 right-4 top-[76px] flex flex-col gap-1 rounded-2xl border border-ink/10 bg-cream p-3 text-ink shadow-xl md:hidden">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-white">{label}</a>
            ))}
            <a href="#aksi" onClick={() => setOpen(false)} className="mt-1 rounded-xl bg-forest px-4 py-3 text-center font-bold text-white">Ambil Peran</a>
          </div>
        )}
      </nav>
    </header>
  );
}
