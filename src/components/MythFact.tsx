"use client";

import { Check, RotateCcw, Sparkles, X } from "lucide-react";
import { useState } from "react";

const statements = [
  { text: "Lampu kuning berarti pengendara harus menambah kecepatan agar sempat lewat.", fact: false, explanation: "Lampu kuning adalah peringatan untuk berhenti jika hal itu masih dapat dilakukan dengan aman, bukan isyarat untuk mempercepat." },
  { text: "Lampu hazard tidak membuat kendaraan boleh berhenti di lokasi terlarang.", fact: true, explanation: "Hazard hanya memberi tanda kondisi darurat. Lampu tersebut tidak mengubah tikungan, zebra cross, atau badan jalan menjadi tempat berhenti yang aman." },
  { text: "Trotoar yang sedang kosong boleh digunakan motor untuk menghindari kemacetan.", fact: false, explanation: "Trotoar tetap merupakan ruang pejalan kaki. Kondisi kosong saat ini tidak berarti tidak ada orang yang akan menggunakannya beberapa detik kemudian." },
  { text: "Jarak aman perlu ditambah ketika jalan basah.", fact: true, explanation: "Permukaan basah mengurangi daya cengkeram dan dapat memperpanjang jarak pengereman, sehingga ruang untuk bereaksi perlu diperbesar." },
  { text: "Membaca pesan saat berhenti di lampu merah tidak memengaruhi keselamatan.", fact: false, explanation: "Perhatian dapat tetap tertinggal pada ponsel ketika kendaraan mulai bergerak. Jika pesan penting, berhenti di lokasi aman sebelum membukanya." },
  { text: "Pengendara tertib ikut membantu arus lalu lintas menjadi lebih mudah diprediksi.", fact: true, explanation: "Sein, jarak, posisi, dan kecepatan yang konsisten membantu pengguna lain memperkirakan gerakan serta mengurangi manuver mendadak." },
] as const;

export default function MythFact() {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const statement = statements[current];
  const correct = answer === statement.fact;

  const choose = (value: boolean) => {
    if (answer !== null) return;
    setAnswer(value);
    if (value === statement.fact) setScore((total) => total + 1);
  };

  const next = () => {
    if (current === statements.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((index) => index + 1);
    setAnswer(null);
  };

  const reset = () => {
    setCurrent(0);
    setAnswer(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="mitos" className="bg-gradient-to-b from-sky-50/50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-forest"><Sparkles size={15} /> Mitos atau fakta</div>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] sm:text-5xl">Yang sering terdengar belum tentu benar.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-ink/60">Enam pernyataan singkat untuk membongkar anggapan yang sering dianggap wajar di jalan.</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl shadow-slate-950/5">
          {finished ? (
            <div className="grid min-h-[430px] place-items-center bg-gradient-to-br from-[#173e65] to-[#237f9b] p-8 text-center text-white">
              <div className="max-w-xl">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-sun text-ink"><Check size={30} /></span>
                <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-white/50">Hasilmu</p>
                <p className="mt-2 font-display text-6xl font-bold">{score}<span className="text-2xl text-white/35">/{statements.length}</span></p>
                <h3 className="mt-5 font-display text-2xl font-bold">{score === statements.length ? "Semua anggapan berhasil kamu bedakan." : score >= 4 ? "Pemahamanmu sudah kuat." : "Beberapa kebiasaan lama perlu dilihat lagi."}</h3>
                <button type="button" onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink"><RotateCcw size={15} /> Ulangi permainan</button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-forest">Pernyataan {current + 1}</span>
                  <span className="text-ink/35">{current + 1} / {statements.length}</span>
                </div>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-mint"><div className="h-full rounded-full bg-forest transition-all" style={{ width: `${((current + 1) / statements.length) * 100}%` }} /></div>
                <h3 className="mt-10 font-display text-2xl font-bold leading-snug tracking-[-.03em] sm:text-3xl">{statement.text}</h3>
                <div className="mt-9 grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => choose(false)} disabled={answer !== null} className={`rounded-2xl border p-5 font-display text-lg font-bold transition ${answer === false ? correct ? "border-sky-500 bg-sky-50 text-forest" : "border-red-300 bg-red-50 text-red-700" : "border-ink/10 hover:border-forest/30"}`}>Mitos</button>
                  <button type="button" onClick={() => choose(true)} disabled={answer !== null} className={`rounded-2xl border p-5 font-display text-lg font-bold transition ${answer === true ? correct ? "border-sky-500 bg-sky-50 text-forest" : "border-red-300 bg-red-50 text-red-700" : "border-ink/10 hover:border-forest/30"}`}>Fakta</button>
                </div>
              </div>
              <aside className="flex min-h-72 flex-col justify-between bg-cream p-7 sm:p-10 lg:p-12">
                {answer === null ? (
                  <div><p className="text-sm font-bold text-forest">Pikirkan dampaknya</p><p className="mt-3 leading-7 text-ink/55">Jangan jawab berdasarkan apa yang paling sering dilakukan orang. Pilih berdasarkan tindakan yang menjaga ruang bersama.</p></div>
                ) : (
                  <div>
                    <span className={`grid size-10 place-items-center rounded-xl ${correct ? "bg-sky-100 text-forest" : "bg-red-100 text-red-700"}`}>{correct ? <Check size={20} /> : <X size={20} />}</span>
                    <p className={`mt-5 font-display text-xl font-bold ${correct ? "text-forest" : "text-red-700"}`}>{correct ? "Tepat" : `Jawabannya ${statement.fact ? "Fakta" : "Mitos"}`}</p>
                    <p className="mt-3 leading-7 text-ink/60">{statement.explanation}</p>
                  </div>
                )}
                <button type="button" disabled={answer === null} onClick={next} className="mt-8 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition enabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-30">{current === statements.length - 1 ? "Lihat hasil" : "Pernyataan berikutnya"}</button>
              </aside>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
