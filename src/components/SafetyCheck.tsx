"use client";

import { CheckCircle2, Gauge, RotateCcw } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    label: "Saat notifikasi masuk ketika berkendara...",
    options: [
      ["Saya langsung membukanya", 0],
      ["Kadang melihat saat jalan sepi", 1],
      ["Saya berhenti di tempat aman", 2],
    ],
  },
  {
    label: "Sebelum berbelok atau berpindah jalur...",
    options: [
      ["Sein sering terlupa", 0],
      ["Sein dinyalakan saat bergerak", 1],
      ["Sein dinyalakan lebih awal", 2],
    ],
  },
  {
    label: "Ketika bertemu zebra cross...",
    options: [
      ["Saya tetap melaju", 0],
      ["Saya melambat jika ada orang", 1],
      ["Saya melambat dan memberi prioritas", 2],
    ],
  },
  {
    label: "Saat lalu lintas sedang padat...",
    options: [
      ["Saya mencari celah secepatnya", 0],
      ["Kadang terpancing pengendara lain", 1],
      ["Saya tetap menjaga jarak dan emosi", 2],
    ],
  },
  {
    label: "Jika rute transportasi umum memungkinkan...",
    options: [
      ["Tidak pernah saya pertimbangkan", 0],
      ["Sesekali saya gunakan", 1],
      ["Saya membandingkan moda sebelum pergi", 2],
    ],
  },
] as const;

export default function SafetyCheck() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const answered = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce<number>((total, answer) => total + (answer ?? 0), 0);

  const selectAnswer = (questionIndex: number, value: number) => {
    setShowResult(false);
    setAnswers((current) => current.map((answer, index) => index === questionIndex ? value : answer));
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  const result = score >= 9
    ? { title: "Kebiasaanmu sudah sangat aman", text: "Pertahankan konsistensi dan jadilah contoh yang tenang bagi pengguna jalan lain." }
    : score >= 6
      ? { title: "Dasarmu sudah baik", text: "Masih ada beberapa keputusan kecil yang dapat dibuat lebih aman dan lebih berempati." }
      : { title: "Masih ada ruang untuk berubah", text: "Mulai dari satu kebiasaan paling mudah, lalu lakukan secara konsisten di setiap perjalanan." };

  return (
    <div className="grid overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl shadow-slate-950/5 lg:grid-cols-[1.25fr_.75fr]">
      <div className="p-6 sm:p-9 lg:p-11">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-forest/55">5 pertanyaan singkat</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Cek kebiasaan perjalananmu</h3>
          </div>
          <span className="rounded-full bg-mint px-3 py-1.5 text-xs font-bold text-forest">{answered}/{questions.length} dijawab</span>
        </div>

        <div className="mt-8 space-y-7">
          {questions.map((question, questionIndex) => (
            <fieldset key={question.label}>
              <legend className="text-sm font-bold sm:text-base">{questionIndex + 1}. {question.label}</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {question.options.map(([label, value]) => {
                  const active = answers[questionIndex] === value;
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() => selectAnswer(questionIndex, value)}
                      className={`rounded-xl border px-3 py-3 text-left text-xs font-semibold leading-5 transition ${active ? "border-forest bg-mint text-forest" : "border-ink/10 bg-cream text-ink/60 hover:border-forest/30"}`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      <aside className="flex flex-col justify-between bg-gradient-to-br from-[#173e65] to-[#237f9b] p-7 text-white sm:p-9 lg:p-11">
        {showResult ? (
          <div>
            <CheckCircle2 size={38} className="text-sun" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-white/50">Skor kebiasaan</p>
            <p className="mt-2 font-display text-6xl font-bold">{score}<span className="text-2xl text-white/35">/10</span></p>
            <h4 className="mt-6 font-display text-2xl font-bold leading-snug">{result.title}</h4>
            <p className="mt-3 leading-7 text-white/65">{result.text}</p>
          </div>
        ) : (
          <div>
            <Gauge size={38} className="text-sun" />
            <h4 className="mt-8 font-display text-2xl font-bold">Tidak ada jawaban sempurna yang dibuat-buat.</h4>
            <p className="mt-4 leading-7 text-white/65">Jawab sesuai kebiasaanmu saat ini. Hasilnya tidak disimpan dan hanya digunakan untuk refleksi pribadi.</p>
          </div>
        )}

        <div className="mt-10 space-y-3">
          <button type="button" disabled={answered !== questions.length} onClick={() => setShowResult(true)} className="w-full rounded-full bg-sun px-5 py-3.5 text-sm font-bold text-ink transition enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-35">
            Lihat hasil kebiasaan
          </button>
          {showResult && <button type="button" onClick={reset} className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white/70 transition hover:bg-white/10"><RotateCcw size={15} /> Ulangi penilaian</button>}
        </div>
      </aside>
    </div>
  );
}
