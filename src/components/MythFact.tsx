"use client";

import { Check, RotateCcw, X } from "lucide-react";
import { useState } from "react";

const statements = [
  {
    text: "Memangku anak dengan erat sudah cukup untuk melindunginya selama perjalanan mobil.",
    fact: false,
    explanation: "Saat benturan atau pengereman keras, gaya yang terjadi dapat membuat orang dewasa tidak mampu menahan tubuh anak. Gunakan sistem perlindungan anak yang sesuai usia, ukuran tubuh, petunjuk produsen, dan posisi pemasangan yang direkomendasikan.",
  },
  {
    text: "Ban pasti aman digunakan selama alurnya masih terlihat tebal.",
    fact: false,
    explanation: "Kelayakan ban tidak hanya ditentukan kedalaman alur. Tekanan yang tidak sesuai, retakan, benjolan, kerusakan dinding samping, usia, dan keausan tidak merata juga perlu diperiksa. Ikuti batas serta petunjuk pemeriksaan dari produsen kendaraan dan ban.",
  },
  {
    text: "Botol minum, laptop, atau barang lepas di kabin tidak berbahaya karena kendaraan hanya melaju di dalam kota.",
    fact: false,
    explanation: "Saat kendaraan berhenti mendadak, barang yang tidak diamankan dapat terus bergerak dan membentur penumpang. Simpan barang di kompartemen, bagasi, atau tempat yang tidak membuatnya mudah terlempar maupun mengganggu pedal dan pengemudi.",
  },
  {
    text: "Menoleh singkat sebelum membuka pintu kendaraan dapat membantu mencegah tabrakan dengan pesepeda atau pengendara yang datang dari belakang.",
    fact: true,
    explanation: "Kaca spion tidak selalu memperlihatkan seluruh area di sisi kendaraan. Memeriksa spion lalu menoleh sebelum membuka pintu memberi kesempatan untuk melihat pengguna jalan yang berada di luar bidang pandang kaca.",
  },
  {
    text: "Mengikuti ambulans dari dekat adalah cara aman melewati kemacetan karena kendaraan lain sudah memberi jalan.",
    fact: false,
    explanation: "Ruang yang diberikan kepada kendaraan darurat diperlukan agar petugas dapat bergerak dan bermanuver. Mengikuti dari dekat dapat menutup koridor, mengejutkan pengguna lain, dan menciptakan bahaya baru. Beri jalan, jaga jarak, dan kembali mengikuti arus secara wajar.",
  },
  {
    text: "Posisi head restraint atau sandaran kepala ikut memengaruhi perlindungan leher ketika mobil mengalami benturan dari belakang.",
    fact: true,
    explanation: "Head restraint bukan sekadar penyangga kenyamanan. Posisi yang terlalu rendah atau terlalu jauh dari kepala dapat mengurangi efektivitasnya. Atur sesuai petunjuk kendaraan agar bagian penyangga berada dekat dan sejajar dengan area kepala yang direkomendasikan.",
  },
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
          <h2 className="font-display text-4xl font-bold tracking-[-.045em] sm:text-5xl">Yang sering terdengar belum tentu benar.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-ink/75">Enam pernyataan singkat untuk membongkar anggapan yang sering dianggap wajar di jalan.</p>
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
                  <button type="button" onClick={() => choose(false)} disabled={answer !== null} className={`rounded-2xl border p-5 font-display text-lg font-bold transition ${answer === false ? correct ? "translate-y-1 border-sky-500 bg-sky-50 text-forest shadow-none" : "translate-y-1 border-red-300 bg-red-50 text-red-700 shadow-none" : "border-ink/10 shadow-[0_6px_0_#dbe7f1] hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-[0_8px_0_#c7ddeb]"}`}>Mitos</button>
                  <button type="button" onClick={() => choose(true)} disabled={answer !== null} className={`rounded-2xl border p-5 font-display text-lg font-bold transition ${answer === true ? correct ? "translate-y-1 border-sky-500 bg-sky-50 text-forest shadow-none" : "translate-y-1 border-red-300 bg-red-50 text-red-700 shadow-none" : "border-ink/10 shadow-[0_6px_0_#dbe7f1] hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-[0_8px_0_#c7ddeb]"}`}>Fakta</button>
                </div>
              </div>
              <aside className="flex min-h-72 flex-col justify-between bg-cream p-7 sm:p-10 lg:p-12">
                {answer === null ? (
                  <div><p className="text-sm font-bold text-forest">Pikirkan dampaknya</p><p className="mt-3 leading-7 text-ink/55">Jangan jawab berdasarkan apa yang paling sering dilakukan orang. Pilih berdasarkan tindakan yang menjaga ruang bersama.</p></div>
                ) : (
                  <div>
                    <span className={`grid size-10 place-items-center rounded-xl ${correct ? "bg-sky-100 text-forest" : "bg-red-100 text-red-700"}`}>{correct ? <Check size={20} /> : <X size={20} />}</span>
                    <p className={`mt-5 font-display text-xl font-bold ${correct ? "text-forest" : "text-red-700"}`}>{correct ? "Tepat" : `Jawabannya ${statement.fact ? "Fakta" : "Mitos"}`}</p>
                    <p className="mt-3 leading-7 text-ink/75">{statement.explanation}</p>
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
