"use client";

import { Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { actions } from "@/data/content";

export default function Pledge() {
  const [checked, setChecked] = useState<number[]>([]);
  const [committed, setCommitted] = useState(false);

  const toggle = (index: number) => {
    setCommitted(false);
    setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-xl shadow-slate-950/5 lg:grid-cols-[1.1fr_.9fr]">
      <div className="p-6 sm:p-10 lg:p-14">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-forest/60">Checklist hari ini</p>
        <div className="grid gap-3">
          {actions.map((action, index) => {
            const active = checked.includes(index);
            return (
              <button
                type="button"
                key={action}
                onClick={() => toggle(index)}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left text-sm font-semibold transition sm:text-base ${active ? "border-forest bg-mint/60" : "border-ink/10 hover:border-forest/40"}`}
              >
                <span className={`grid size-7 shrink-0 place-items-center rounded-lg border ${active ? "border-forest bg-forest text-white" : "border-ink/20"}`}>
                  {active && <Check size={16} strokeWidth={3} />}
                </span>
                {action}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-br from-blue-700 to-cyan-700 p-8 text-white sm:p-10 lg:p-14">
        <ShieldCheck size={42} className="mb-8 text-sun" strokeWidth={1.6} />
        <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
          Perubahan dimulai dari satu keputusan.
        </h3>
        <p className="mt-5 leading-7 text-white/70">
          Tidak perlu menunggu semua orang tertib. Pilih tindakan yang siap kamu lakukan, lalu mulai dari perjalanan berikutnya.
        </p>
        <button
          type="button"
          disabled={checked.length === 0}
          onClick={() => setCommitted(true)}
          className="mt-8 rounded-xl bg-sun px-6 py-4 font-bold text-ink transition enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {committed ? "Komitmen tersimpan. Terima kasih!" : `Saya Siap Berubah${checked.length ? ` (${checked.length})` : ""}`}
        </button>
      </div>
    </div>
  );
}
