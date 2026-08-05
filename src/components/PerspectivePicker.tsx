"use client";

import { Bike, BusFront, CarFront, Footprints, MoveRight, PersonStanding } from "lucide-react";
import { useState } from "react";

const perspectives = [
  {
    id: "motor",
    label: "Pengendara motor",
    icon: Bike,
    title: "Tetap terlihat, terbaca, dan terkendali.",
    text: "Fokus pada posisi aman, penggunaan sein, jarak, kecepatan, serta keputusan untuk tidak mengambil ruang pejalan kaki.",
    points: ["Posisi dan jarak aman", "Sein sebelum bergerak", "Trotoar bukan jalan pintas"],
  },
  {
    id: "mobil",
    label: "Pengendara mobil",
    icon: CarFront,
    title: "Kendaraan lebih besar membawa tanggung jawab lebih besar.",
    text: "Pelajari blind spot, prioritas pengguna rentan, jarak pengereman, dan cara berhenti tanpa menghalangi ruang bersama.",
    points: ["Periksa blind spot", "Hormati zebra cross", "Parkir di ruang yang benar"],
  },
  {
    id: "pejalan",
    label: "Pejalan kaki",
    icon: Footprints,
    title: "Hak untuk berjalan dengan aman adalah bagian dari mobilitas.",
    text: "Kenali ruang aman, cara menyeberang yang lebih terlihat, dan alasan trotoar serta zebra cross harus tetap terlindungi.",
    points: ["Gunakan ruang penyeberangan", "Pastikan terlihat", "Kenali hak di trotoar"],
  },
  {
    id: "sepeda",
    label: "Pesepeda",
    icon: PersonStanding,
    title: "Berbagi jalan dengan komunikasi yang jelas.",
    text: "Fokus pada visibilitas, isyarat tangan, posisi di jalan, dan kewaspadaan terhadap pintu kendaraan serta persimpangan.",
    points: ["Gunakan isyarat", "Jaga visibilitas", "Waspadai persimpangan"],
  },
  {
    id: "transit",
    label: "Pengguna transportasi",
    icon: BusFront,
    title: "Perjalanan aman dimulai sebelum naik kendaraan.",
    text: "Pelajari akses halte, budaya antre, keamanan di kendaraan, dan cara membandingkan moda sesuai kebutuhan perjalanan.",
    points: ["Rencanakan akses halte", "Antre dan beri ruang", "Pilih moda yang sesuai"],
  },
] as const;

export default function PerspectivePicker() {
  const [selected, setSelected] = useState(0);
  const perspective = perspectives[selected];
  const PerspectiveIcon = perspective.icon;

  return (
    <section id="perspektif" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-[-.045em] sm:text-5xl">Kamu paling sering berada di posisi mana?</h2>
          </div>
          <p className="max-w-2xl leading-7 text-ink/75">Pilih perspektif yang paling dekat dengan keseharianmu. Tidak ada data yang disimpan; pilihan ini hanya membantu menentukan fokus belajar.</p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-3">
          {perspectives.map(({ label, icon: Icon }, index) => (
            <button type="button" key={label} onClick={() => setSelected(index)} className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-bold transition ${selected === index ? "-translate-y-1 border-forest bg-forest text-white shadow-[0_7px_0_#174d87,0_14px_25px_rgba(24,43,73,.16)]" : "border-ink/10 bg-cream text-ink/60 hover:-translate-y-0.5 hover:border-forest/30"}`}>
              <Icon size={17} /> {label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid overflow-hidden rounded-[2rem] border border-sky-100 bg-mint shadow-[0_12px_0_#d4e6f2,0_28px_60px_rgba(24,43,73,.1)] lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="grid size-14 place-items-center rounded-2xl bg-white text-forest shadow-sm"><PerspectiveIcon size={27} /></span>
            <h3 className="mt-8 max-w-xl font-display text-3xl font-bold leading-tight tracking-[-.035em]">{perspective.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-ink/75">{perspective.text}</p>
            <a href="#contoh" className="mt-8 inline-flex items-center gap-2 font-bold text-forest">Lihat contoh di jalan <MoveRight size={18} /></a>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#173e65] to-[#247a96] p-7 text-white sm:p-10 lg:p-12">
            <p className="font-display text-lg font-bold text-sun">Fokus belajarmu</p>
            <ol className="mt-7 space-y-5">
              {perspective.points.map((point, index) => (
                <li key={point} className="flex items-center gap-4 font-bold"><span className="grid size-8 place-items-center rounded-full bg-white/10 text-xs text-white/70">0{index + 1}</span>{point}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
