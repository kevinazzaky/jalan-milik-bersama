"use client";

import { Brain, CarFront, Check, HeartHandshake, RotateCcw, ShieldCheck } from "lucide-react";
import { useState } from "react";

const scenes = [
  {
    time: "07.15",
    title: "Kamu berangkat lebih terlambat dari rencana.",
    text: "Perjalanan ke kampus biasanya memakan waktu 30 menit dan kelas dimulai pukul 07.45.",
    choices: [
      { label: "Tambah kecepatan agar tidak terlambat", feedback: "Kecepatan menambah risiko tetapi tidak menjamin waktu perjalanan saat kondisi jalan berubah.", points: [0, 0, 0] },
      { label: "Beri kabar dan tetap berkendara stabil", feedback: "Mengelola keterlambatan lebih aman daripada memindahkan risikonya kepada pengguna jalan lain.", points: [2, 1, 2] },
    ],
  },
  {
    time: "07.22",
    title: "Lampu berubah kuning saat kamu mendekati persimpangan.",
    text: "Kamu masih memiliki jarak yang cukup untuk berhenti dengan aman.",
    choices: [
      { label: "Percepat agar sempat melewati lampu", feedback: "Keputusan terburu-buru mengurangi waktu membaca kendaraan dan pejalan kaki dari arah lain.", points: [0, 0, 0] },
      { label: "Kurangi kecepatan dan berhenti", feedback: "Berhenti membuat gerakanmu mudah diprediksi dan memberi ruang aman di persimpangan.", points: [2, 2, 2] },
    ],
  },
  {
    time: "07.28",
    title: "Antrean memanjang dan trotoar terlihat kosong.",
    text: "Beberapa pengendara mulai menggunakan trotoar untuk melewati kemacetan.",
    choices: [
      { label: "Ikuti mereka agar lebih cepat", feedback: "Trotoar kosong tetap merupakan ruang pejalan kaki dan dapat digunakan kapan saja.", points: [0, 0, 0] },
      { label: "Tetap antre di badan jalan", feedback: "Menjaga hak pengguna rentan lebih penting daripada keuntungan waktu yang sangat singkat.", points: [2, 2, 2] },
    ],
  },
  {
    time: "07.34",
    title: "Ponsel berbunyi berkali-kali di dalam tas.",
    text: "Kamu penasaran apakah pesan tersebut berasal dari dosen atau teman sekelas.",
    choices: [
      { label: "Lihat cepat ketika kendaraan melambat", feedback: "Jalan yang lambat tetap berubah. Perhatian yang terbagi mengurangi kesiapanmu bereaksi.", points: [0, 0, 0] },
      { label: "Abaikan sampai tiba atau menepi aman", feedback: "Menunda membuka pesan menjaga perhatian tetap pada kondisi yang sedang berlangsung.", points: [2, 1, 2] },
    ],
  },
  {
    time: "07.41",
    title: "Seorang pelajar menunggu di zebra cross.",
    text: "Kendaraan di belakang cukup dekat dan kamu sudah mengurangi kecepatan secara bertahap.",
    choices: [
      { label: "Lanjut karena waktumu hampir habis", feedback: "Menghemat beberapa detik tidak sebanding dengan mengambil hak dan keselamatan orang yang menyeberang.", points: [0, 0, 0] },
      { label: "Berhenti dan beri kesempatan menyeberang", feedback: "Kamu menutup perjalanan dengan keputusan yang aman, berempati, dan dapat diprediksi.", points: [2, 2, 2] },
    ],
  },
] as const;

export default function JourneyStory() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [scores, setScores] = useState([0, 0, 0]);
  const [finished, setFinished] = useState(false);
  const scene = scenes[step];

  const choose = (index: number) => {
    if (choice !== null) return;
    setChoice(index);
    setScores((current) => current.map((score, scoreIndex) => score + scene.choices[index].points[scoreIndex]));
  };

  const next = () => {
    if (step === scenes.length - 1) {
      setFinished(true);
      return;
    }
    setStep((current) => current + 1);
    setChoice(null);
  };

  const reset = () => {
    setStep(0);
    setChoice(null);
    setScores([0, 0, 0]);
    setFinished(false);
  };

  const indicators = [
    { label: "Keselamatan", icon: ShieldCheck, value: scores[0] },
    { label: "Empati", icon: HeartHandshake, value: scores[1] },
    { label: "Kendali diri", icon: Brain, value: scores[2] },
  ];

  return (
    <section id="cerita" className="bg-[#123552] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[.2em] text-sun">Cerita interaktif</p><h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] sm:text-5xl">Satu perjalanan, lima keputusan.</h2></div>
          <p className="max-w-xl leading-7 text-white/60 lg:justify-self-end">Tujuannya bukan tiba paling cepat, tetapi melihat bagaimana keputusan kecil membentuk keselamatan seluruh perjalanan.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[.06] backdrop-blur">
          {finished ? (
            <div className="grid min-h-[480px] place-items-center p-7 text-center sm:p-12">
              <div className="max-w-2xl">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-sun text-ink"><Check size={30} /></span>
                <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-white/45">Perjalanan selesai</p>
                <h3 className="mt-3 font-display text-3xl font-bold">{scores.reduce((a, b) => a + b, 0) >= 25 ? "Kamu tiba dengan keputusan yang bisa dipertanggungjawabkan." : "Kamu tiba, tetapi beberapa keputusan masih bisa dibuat lebih aman."}</h3>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">Waktu tiba bukan satu-satunya ukuran perjalanan yang baik. Cara kita berbagi ruang juga menentukan apakah orang lain dapat sampai dengan selamat.</p>
                <button type="button" onClick={reset} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink"><RotateCcw size={15} /> Ulangi cerita</button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_.75fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between"><span className="rounded-full bg-sun px-3 py-1.5 text-xs font-bold text-ink">{scene.time}</span><span className="text-xs font-bold text-white/40">{step + 1} / {scenes.length}</span></div>
                <div className="relative mt-6 h-10">
                  <div className="absolute inset-x-0 top-3 h-5 overflow-hidden rounded-full bg-[#263e51] shadow-inner">
                    <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_14px,#f4b950_14px,#f4b950_28px)] opacity-70" />
                    <div className="h-full rounded-full bg-sky-300/15 transition-all" style={{ width: `${((step + 1) / scenes.length) * 100}%` }} />
                  </div>
                  <span className="journey-vehicle absolute top-0 grid size-10 -translate-x-1/2 place-items-center rounded-xl border border-white/60 bg-sun text-ink shadow-xl" style={{ left: `${8 + step * 21}%` }}>
                    <CarFront size={21} />
                  </span>
                </div>
                <h3 className="mt-10 max-w-xl font-display text-3xl font-bold leading-tight tracking-[-.035em]">{scene.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/60">{scene.text}</p>
                <div className="mt-9 grid gap-3">
                  {scene.choices.map((item, index) => (
                    <button type="button" key={item.label} disabled={choice !== null} onClick={() => choose(index)} className={`rounded-2xl border p-5 text-left font-bold transition ${choice === index ? item.points[0] > 0 ? "border-sky-300 bg-sky-300/15" : "border-red-300 bg-red-300/10" : "border-white/15 hover:border-white/40 hover:bg-white/5"}`}><span className="mr-3 text-white/35">{String.fromCharCode(65 + index)}</span>{item.label}</button>
                  ))}
                </div>
                {choice !== null && <div className="mt-6 rounded-2xl bg-white/[.07] p-5 text-sm leading-6 text-white/70">{scene.choices[choice].feedback}</div>}
              </div>

              <aside className="flex flex-col justify-between border-t border-white/10 bg-black/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-white/40">Dampak keputusan</p>
                  <div className="mt-7 space-y-6">
                    {indicators.map(({ label, icon: Icon, value }) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm font-bold"><span className="flex items-center gap-2"><Icon size={16} className="text-sun" />{label}</span><span className="text-white/40">{value}/10</span></div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-500" style={{ width: `${value * 10}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="button" disabled={choice === null} onClick={next} className="mt-10 rounded-full bg-sun px-5 py-3.5 text-sm font-bold text-ink transition enabled:hover:bg-white disabled:cursor-not-allowed disabled:opacity-30">{step === scenes.length - 1 ? "Lihat akhir perjalanan" : "Lanjutkan perjalanan"}</button>
              </aside>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
