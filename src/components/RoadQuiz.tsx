"use client";

import { Check, RotateCcw, Trophy, X } from "lucide-react";
import { useState } from "react";
import { seededShuffle } from "@/lib/shuffle";

const questions = [
  {
    situation: "Lampu baru berubah kuning dan kamu masih cukup jauh dari garis berhenti. Apa pilihanmu?",
    options: ["Tambah kecepatan agar sempat lewat", "Kurangi kecepatan dan bersiap berhenti", "Bunyikan klakson lalu lanjut"],
    answer: 1,
    note: "Lampu kuning berarti bersiap berhenti, bukan mempercepat. Berhenti jika masih dapat dilakukan dengan aman.",
  },
  {
    situation: "Ponsel berbunyi saat kamu sedang berkendara. Pesannya terlihat penting.",
    options: ["Baca cepat sambil melambat", "Berhenti di tempat aman sebelum membuka", "Pegang ponsel di bawah setang"],
    answer: 1,
    note: "Perhatian dapat teralihkan dalam hitungan detik. Menepi di lokasi aman adalah satu-satunya pilihan yang tepat.",
  },
  {
    situation: "Lalu lintas macet dan trotoar di sebelahmu kosong. Apa yang kamu lakukan?",
    options: ["Naik ke trotoar sebentar", "Tetap antre di badan jalan", "Ikuti motor lain yang naik"],
    answer: 1,
    note: "Trotoar adalah ruang aman pejalan kaki. Kosong bukan berarti boleh digunakan kendaraan.",
  },
  {
    situation: "Seorang pejalan kaki menunggu di zebra cross tanpa lampu lalu lintas.",
    options: ["Kurangi kecepatan dan beri jalan", "Lewati sebelum ia menyeberang", "Klakson agar ia menunggu"],
    answer: 0,
    note: "Pejalan kaki adalah pengguna jalan yang lebih rentan dan harus mendapat prioritas di zebra cross.",
  },
  {
    situation: "Kamu akan berpindah jalur karena kendaraan di depan berjalan lambat. Kapan sein dinyalakan?",
    options: ["Sesaat setelah mulai berpindah", "Sebelum berpindah dan setelah memastikan jalur aman", "Tidak perlu jika jalan terlihat kosong"],
    answer: 1,
    note: "Sein perlu dinyalakan sebelum bergerak agar pengguna jalan lain memiliki cukup waktu untuk membaca arah kendaraanmu.",
  },
  {
    situation: "Kendaraan di depanmu melaju pelan saat hujan deras. Apa respons paling aman?",
    options: ["Menempel agar kendaraan lain tidak menyelip", "Menyalip dari sisi kiri", "Kurangi kecepatan dan tambah jarak aman"],
    answer: 2,
    note: "Jalan basah memperpanjang jarak pengereman. Kecepatan lebih rendah dan jarak lebih lebar memberi waktu untuk bereaksi.",
  },
  {
    situation: "Kamu hanya perlu berhenti dua menit, tetapi lokasi terdekat berada tepat setelah tikungan.",
    options: ["Berhenti dan nyalakan lampu hazard", "Cari tempat berhenti yang aman dan diperbolehkan", "Berhenti selama tetap berada di dalam kendaraan"],
    answer: 1,
    note: "Berhenti di tikungan menghalangi pandangan dan memaksa pengguna lain bermanuver mendadak. Lampu hazard tidak membuat lokasi itu aman.",
  },
  {
    situation: "Pengendara di depan terlambat bergerak ketika lampu berubah hijau.",
    options: ["Tekan klakson panjang sampai bergerak", "Langsung menyalip dari sisi mana pun", "Tunggu sejenak, lalu beri peringatan singkat bila diperlukan"],
    answer: 2,
    note: "Klakson adalah alat peringatan, bukan alat untuk meluapkan emosi. Gunakan seperlunya dan tetap beri waktu orang lain bereaksi.",
  },
  {
    situation: "Kamu mulai mengantuk saat berkendara malam hari, sedangkan tujuan tinggal 20 menit lagi.",
    options: ["Buka kaca dan lanjut lebih cepat", "Menepi di tempat aman untuk beristirahat", "Minum sambil tetap berkendara"],
    answer: 1,
    note: "Rasa kantuk menurunkan fokus dan waktu reaksi. Jarak tujuan yang dekat bukan alasan untuk mengambil risiko microsleep.",
  },
  {
    situation: "Tujuanmu terhubung transportasi umum dengan jadwal yang jelas, tetapi perjalanan sedikit lebih lama.",
    options: ["Pertimbangkan transportasi umum sesuai kebutuhan perjalanan", "Selalu gunakan kendaraan pribadi karena pasti lebih baik", "Batalkan perjalanan agar tidak perlu memilih"],
    answer: 0,
    note: "Transportasi umum yang rute dan kondisinya sesuai dapat mengurangi jumlah kendaraan, kemacetan, dan emisi tanpa mengabaikan kebutuhan perjalananmu.",
  },
];

export default function RoadQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(71);

  const question = questions[current];
  const options = seededShuffle(
    question.options.map((label, index) => ({ label, correct: index === question.answer })),
    shuffleSeed + current * 97,
  );
  const correct = selected !== null && options[selected].correct;

  const choose = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (options[index].correct) setScore((value) => value + 1);
  };

  const next = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShuffleSeed((value) => value + 1);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#183b63] via-[#24567d] to-[#247a9b] text-white shadow-xl shadow-slate-950/10">
      <div className="border-b border-white/10 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-sun">Simulasi jalan</p>
            <p className="mt-1 text-sm text-white/55">Pilih respons paling aman</p>
          </div>
          {!finished && <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">{current + 1} / {questions.length}</span>}
        </div>
        {!finished && (
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
        )}
      </div>

      {finished ? (
        <div className="grid min-h-[420px] place-items-center px-6 py-12 text-center">
          <div>
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-sun text-ink"><Trophy size={30} /></span>
            <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-white/50">Skor akhir</p>
            <p className="mt-2 font-display text-6xl font-bold">{score}<span className="text-2xl text-white/35">/{questions.length}</span></p>
            <h3 className="mt-5 font-display text-2xl font-bold">{score === questions.length ? "Naluri berkendaramu sudah aman." : score >= 7 ? "Sudah baik, terus pertajam empatimu." : score >= 4 ? "Pemahamanmu mulai terbentuk. Coba lagi, ya." : "Yuk, baca lagi situasinya."}</h3>
            <button type="button" onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-sun">
              <RotateCcw size={16} /> Main lagi
            </button>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_.85fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold text-white/45">Situasi {String(current + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 max-w-xl font-display text-2xl font-bold leading-snug tracking-[-.025em] sm:text-3xl">{question.situation}</h3>
            <div className="mt-8 space-y-3">
              {options.map((option, index) => {
                const isAnswer = option.correct;
                const isSelected = index === selected;
                const revealed = selected !== null;
                return (
                  <button
                    type="button"
                    key={option.label}
                    onClick={() => choose(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm font-semibold transition ${revealed && isAnswer ? "border-sky-300 bg-sky-300/15" : revealed && isSelected ? "border-red-300 bg-red-300/10" : "border-white/15 hover:border-white/45 hover:bg-white/5"}`}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/20 text-xs">{revealed && isAnswer ? <Check size={15} /> : revealed && isSelected ? <X size={15} /> : String.fromCharCode(65 + index)}</span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
          <aside className="flex min-h-64 flex-col justify-between bg-white/[.06] p-6 sm:p-8 lg:p-10">
            {selected === null ? (
              <div>
                <p className="text-sm font-bold text-sun">Petunjuk kecil</p>
                <p className="mt-3 leading-7 text-white/60">Jangan hanya pikirkan siapa yang paling cepat sampai. Pertimbangkan siapa saja yang terdampak keputusanmu.</p>
              </div>
            ) : (
              <div>
                <p className={`text-sm font-bold ${correct ? "text-sky-300" : "text-red-300"}`}>{correct ? "Tepat!" : "Belum tepat"}</p>
                <p className="mt-3 leading-7 text-white/70">{question.note}</p>
              </div>
            )}
            <button type="button" disabled={selected === null} onClick={next} className="mt-8 rounded-xl bg-sun px-5 py-3.5 text-sm font-bold text-ink transition enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-25">
              {current === questions.length - 1 ? "Lihat hasil" : "Situasi berikutnya"}
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
