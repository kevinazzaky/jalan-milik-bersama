import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BusFront,
  ChevronRight,
  CircleAlert,
  Gauge,
  Globe2,
  HeartHandshake,
  Leaf,
  MoveRight,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import JourneyStory from "@/components/JourneyStory";
import MythFact from "@/components/MythFact";
import NewsFeed from "@/components/NewsFeed";
import PerspectivePicker from "@/components/PerspectivePicker";
import Pledge from "@/components/Pledge";
import RoadQuiz from "@/components/RoadQuiz";
import SafetyCheck from "@/components/SafetyCheck";
import { impacts, sources, violations } from "@/data/content";
import { getLatestNews } from "@/lib/news";

const impactIcons = [CircleAlert, Users, Leaf, Volume2];

export const revalidate = 300;

export default async function Home() {
  const { articles: latestNews, isLive, updatedAt } = await getLatestNews();

  return (
    <main className="overflow-hidden">
      <Navbar />

      <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#102a43] via-[#174f78] to-[#247ca0] pb-16 pt-32 text-white">
        <div className="absolute -left-32 top-16 size-[30rem] rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute -right-32 top-1/3 size-[32rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[.06] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-16 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-sun" /> Platform edukasi keselamatan jalan
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Berkendara lebih sadar untuk <span className="bg-gradient-to-r from-[#8ed8ff] via-[#9ee8e8] to-[#ffd27f] bg-clip-text text-transparent">jalan yang lebih aman.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-xl">
            Pilih sudut pandangmu, ikuti cerita perjalanan, uji keputusan lewat simulasi, dan temukan satu kebiasaan yang bisa dimulai hari ini.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#perspektif" className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-4 font-bold text-white shadow-xl shadow-slate-950/30 transition hover:-translate-y-0.5 hover:shadow-sky-500/20">
              Mulai Perjalanan <ArrowDown size={18} />
            </a>
            <a href="#masalah" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
              Mulai Belajar <ArrowRight size={18} />
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["6", "Kasus sehari-hari"],
              ["10", "Simulasi interaktif"],
              ["3", "Berita terverifikasi"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[.07] p-5 text-left backdrop-blur sm:text-center">
                <p className="font-display text-3xl font-extrabold tabular-nums">{value}</p>
                <p className="mt-1 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-950/15" />
      </section>

      <section className="bg-gradient-to-r from-[#153d68] to-[#23779a] py-7 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 lg:px-8">
          <p className="max-w-xl font-display text-xl font-semibold tracking-[-0.025em]">Keselamatan bukan sekadar urusan tilang. Ini tentang bagaimana kita menjaga orang lain.</p>
          <div className="flex items-center gap-2 text-sm font-bold text-sun"><HeartHandshake size={20} /> Jalan adalah ruang bersama</div>
        </div>
      </section>

      <PerspectivePicker />

      <section id="masalah" className="bg-gradient-to-b from-cream via-white to-sky-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Mengapa ini penting?</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">Dua masalah,<br />satu siklus yang sama.</h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-8 text-ink/60">
              Kebiasaan di jalan dan pilihan moda transportasi saling berkaitan. Kita perlu membenahi perilaku tanpa menutup mata terhadap kualitas sistem transportasi.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="group rounded-3xl border border-amber-100 bg-amber-50/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">
              <div className="mb-12 flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-[#fff0d7] text-ink"><Gauge size={28} /></span>
                <span className="font-display text-sm font-bold text-ink/30">01 / PERILAKU</span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-[-0.035em]">Etika berkendara diabaikan</h3>
              <p className="mt-4 leading-7 text-ink/60">Kecepatan dan kenyamanan pribadi sering didahulukan daripada keselamatan serta hak pengguna jalan lain. Karena sering terlihat, pelanggaran kecil pun terasa normal.</p>
              <div className="mt-8 flex items-center gap-2 font-bold text-forest">Empati sebelum ego <MoveRight className="transition group-hover:translate-x-1" size={19} /></div>
            </article>
            <article className="group rounded-3xl border border-sky-100 bg-mint p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">
              <div className="mb-12 flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-forest text-white"><BusFront size={28} /></span>
                <span className="font-display text-sm font-bold text-ink/30">02 / SISTEM</span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-[-0.035em]">Transportasi umum belum jadi pilihan</h3>
              <p className="mt-4 leading-7 text-ink/60">Kendaraan pribadi terasa lebih praktis. Namun keputusan itu juga dipengaruhi rute, jadwal, keamanan, kenyamanan, serta akses menuju halte yang belum merata.</p>
              <div className="mt-8 flex items-center gap-2 font-bold text-forest">Layanan baik, pilihan lebih bijak <MoveRight className="transition group-hover:translate-x-1" size={19} /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Efek berantai</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Satu pilihan memengaruhi seluruh jalan.</h2>
          </div>
          <div className="mt-14 overflow-hidden rounded-3xl border border-sky-100 bg-cream shadow-sm">
            {[
              { title: "Kendaraan pribadi", cause: "Rute angkutan belum merata dan kendaraan pribadi dianggap lebih fleksibel.", problem: "Ketergantungan tumbuh dan alternatif perjalanan jarang dipertimbangkan." },
              { title: "Volume meningkat", cause: "Semakin banyak orang melakukan perjalanan sendiri dengan satu kendaraan.", problem: "Kapasitas jalan cepat penuh, terutama pada jam berangkat dan pulang." },
              { title: "Kemacetan", cause: "Jumlah kendaraan melampaui ruang jalan, diperparah parkir dan manuver sembarangan.", problem: "Waktu tempuh tidak pasti, energi terbuang, dan emisi meningkat." },
              { title: "Stres & agresi", cause: "Perjalanan lebih lama, kebisingan, serta perebutan ruang terjadi berulang.", problem: "Pengendara mudah emosi, memaksakan jalan, atau kehilangan fokus." },
              { title: "Risiko kecelakaan", cause: "Keputusan impulsif seperti menyalip, melawan arus, dan mengabaikan jarak aman.", problem: "Konflik antarpengguna jalan meningkat dan keselamatan semua orang terancam." },
            ].map((item, index) => (
              <article key={item.title} className="relative grid gap-5 border-b border-sky-100/80 p-6 last:border-0 sm:p-7 md:grid-cols-[70px_1fr_1.2fr] md:items-start md:gap-8">
                <div className="flex items-center gap-3 md:block">
                  <span className={`grid size-10 place-items-center rounded-xl font-display text-xs font-bold ${index === 4 ? "bg-sun text-ink" : "bg-mint text-forest"}`}>0{index + 1}</span>
                  <ChevronRight className="hidden text-forest/30 md:mx-auto md:mt-4 md:block md:rotate-90" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-forest/50">Tahap</p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-[-.025em]">{item.title}</h3>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-forest/50">Penyebab</p>
                    <p className="mt-2 text-sm leading-6 text-ink/65">{item.cause}</p>
                  </div>
                  <div className={`rounded-2xl p-4 ${index === 4 ? "bg-amber-50" : "bg-sky-50/80"}`}>
                    <p className="text-xs font-bold uppercase tracking-[.14em] text-ink/40">Masalah</p>
                    <p className="mt-2 text-sm leading-6 text-ink/65">{item.problem}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contoh" className="bg-gradient-to-b from-cream via-sky-50/45 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Terjadi setiap hari</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Terlihat sepele,<br />dampaknya nyata.</h2>
            </div>
            <p className="max-w-md leading-7 text-ink/60">Kenali perilakunya, pahami siapa yang terdampak, lalu pilih respons yang lebih aman.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {violations.map((item) => (
              <article key={item.number} className="group flex min-h-[370px] flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-xl sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-forest/35">{item.number}</span>
                  <CircleAlert size={20} className="text-sun" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">{item.title}</h3>
                <div className="mt-6 space-y-5 text-sm leading-6">
                  <div><p className="mb-1 font-bold text-ink">Yang terjadi</p><p className="text-ink/55">{item.behavior}</p></div>
                  <div><p className="mb-1 font-bold text-ink">Dampaknya</p><p className="text-ink/55">{item.impact}</p></div>
                </div>
                <div className="mt-auto border-t border-ink/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[.15em] text-forest/45">Pilihan bijak</p>
                  <p className="mt-2 text-sm font-bold text-forest">{item.action}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MythFact />

      <JourneyStory />

      <section id="cek-diri" className="bg-gradient-to-b from-white to-sky-50/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-forest"><Gauge size={15} /> Cek kebiasaan</div>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Seberapa bijak perjalananmu?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-ink/60">Kenali pola keputusanmu sebelum mengubahnya. Penilaian ini bersifat reflektif, bukan tes untuk menghakimi.</p>
          </div>
          <SafetyCheck />
        </div>
      </section>

      <section id="data" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-forest"><BarChart3 size={15} /> Dashboard data</div>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Keselamatan jalan dalam angka.</h2>
            </div>
            <p className="max-w-md leading-7 text-ink/55">Gambaran global menunjukkan bahwa risiko di jalan bukan masalah kecil dan paling berat dirasakan kelompok rentan.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { value: "1,19 juta", label: "kematian di jalan setiap tahun", note: "Estimasi global tahunan", color: "from-blue-600 to-sky-500" },
              { value: "92%", label: "terjadi di negara berpendapatan rendah dan menengah", note: "Dengan sekitar 60% kendaraan dunia", color: "from-cyan-600 to-sky-500" },
              { value: "53%", label: "korban adalah pengguna jalan rentan", note: "Pejalan kaki, pesepeda, dan kendaraan roda dua", color: "from-amber-500 to-orange-400" },
            ].map((stat) => (
              <article key={stat.value} className="relative overflow-hidden rounded-3xl border border-sky-100 bg-cream p-7 shadow-sm sm:p-8">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${stat.color}`} />
                <Globe2 size={24} className="text-forest/45" />
                <p className="mt-10 font-display text-4xl font-bold tracking-[-.04em]">{stat.value}</p>
                <p className="mt-3 font-bold leading-6">{stat.label}</p>
                <p className="mt-5 border-t border-ink/8 pt-4 text-xs leading-5 text-ink/45">{stat.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-mint px-5 py-4 text-sm sm:flex-row sm:items-center">
            <p className="text-ink/60">Sumber: WHO, <span className="font-bold text-ink">Global Status Report on Road Safety 2023</span></p>
            <a href="https://www.who.int/publications/i/item/9789240086517" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-forest">Lihat laporan <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="kuis" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 grid gap-5 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Mini-game</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Seberapa aman keputusanmu?</h2>
            </div>
            <p className="max-w-xl leading-7 text-ink/60 md:justify-self-end">Sepuluh situasi yang sering terjadi di jalan. Tidak ada timer, baca perlahan dan pilih respons yang paling menjaga semua orang.</p>
          </div>
          <RoadQuiz />
        </div>
      </section>

      <section id="dampak" className="relative overflow-hidden bg-gradient-to-br from-[#153653] via-[#1d5577] to-[#257a91] py-20 text-white sm:py-28">
        <div className="absolute -left-36 top-1/3 size-80 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sun">Dampak bersama</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Satu tindakan kecil bisa dirasakan satu kota.</h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/55">Pilihan di jalan tidak hanya menentukan waktu tiba, tetapi juga keselamatan, ruang hidup, udara, dan ketenangan orang lain.</p>
          </div>

          <div className="relative mt-14 grid gap-4 lg:grid-cols-12">
            {impacts.map((impact, index) => {
              const Icon = impactIcons[index];
              const layouts = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
              const surfaces = [
                "bg-gradient-to-br from-blue-600 to-cyan-700",
                "bg-white/[.08]",
                "bg-white/[.08]",
                "bg-gradient-to-br from-amber-300 to-orange-400 text-ink",
              ];
              const mutedText = index === 3 ? "text-ink/65" : "text-white/60";
              const iconStyle = index === 3 ? "bg-white/40 text-ink" : index === 0 ? "bg-white/15 text-white" : "bg-sky-300/15 text-[#9edfff]";

              return (
                <article key={impact.title} className={`${layouts[index]} ${surfaces[index]} group relative min-h-64 overflow-hidden rounded-3xl border border-white/10 p-7 shadow-lg shadow-black/5 sm:p-9`}>
                  <div className="flex h-full flex-col justify-between gap-10">
                    <div className="flex items-start justify-between">
                      <span className={`grid size-14 place-items-center rounded-2xl ${iconStyle}`}>
                        <Icon size={27} strokeWidth={1.8} />
                      </span>
                      <span className={`font-display text-sm font-bold ${index === 3 ? "text-ink/35" : "text-white/30"}`}>0{index + 1}</span>
                    </div>
                    <div className="max-w-lg">
                      <h3 className="font-display text-2xl font-bold tracking-[-.03em] sm:text-3xl">{impact.title}</h3>
                      <p className={`mt-3 max-w-md leading-7 ${mutedText}`}>{impact.text}</p>
                    </div>
                  </div>
                  <div className={`absolute -bottom-16 -right-12 size-44 rounded-full border ${index === 3 ? "border-ink/10" : "border-white/10"}`} />
                  <div className={`absolute -bottom-8 -right-4 size-24 rounded-full border ${index === 3 ? "border-ink/10" : "border-white/10"}`} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solusi" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Bergerak bersama</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Solusi tidak berhenti pada pengendara.</h2>
            <p className="mt-6 leading-7 text-ink/60">Budaya jalan yang sehat lahir dari kebiasaan pribadi, dukungan komunitas, dan sistem transportasi yang dapat diandalkan.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              { icon: HeartHandshake, label: "Masyarakat", title: "Berkendara dengan empati", points: ["Patuhi rambu dan marka", "Jaga kecepatan dan fokus", "Hormati pengguna rentan"] },
              { icon: Users, label: "Komunitas", title: "Bangun kebiasaan kolektif", points: ["Edukasi dengan kasus nyata", "Gerakan sehari tanpa kendaraan", "Saling mengingatkan tanpa mempermalukan"] },
              { icon: BusFront, label: "Pemerintah & operator", title: "Hadirkan pilihan yang layak", points: ["Rute dan jadwal konsisten", "Halte aman dan aksesibel", "Integrasi rute dan pembayaran"] },
            ].map(({ icon: Icon, label, title, points }, index) => (
              <article key={label} className={`rounded-3xl p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9 ${index === 1 ? "bg-sun" : index === 0 ? "border border-blue-100 bg-blue-50/60" : "border border-sky-100 bg-sky-50/70"}`}>
                <Icon size={32} strokeWidth={1.7} />
                <p className="mt-12 text-xs font-bold uppercase tracking-[.17em] text-ink/45">{label}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">{title}</h3>
                <ul className="mt-7 space-y-4">
                  {points.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" />{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsFeed articles={latestNews} isLive={isLive} updatedAt={updatedAt} />

      <section id="aksi" className="bg-mint/45 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Aksi kita</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Apa yang siap kamu mulai?</h2>
          </div>
          <Pledge />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-forest/55">Sumber bacaan</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">Belajar dari data,<br />bergerak dengan sadar.</h2>
            </div>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {sources.map((source, index) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 py-5 font-semibold transition hover:text-forest/60">
                  <span><span className="mr-5 text-sm text-ink/30">0{index + 1}</span>{source.label}</span>
                  <ArrowRight size={18} className="shrink-0 transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8">
          <div><p className="font-display text-xl font-bold">Jalan Milik Bersama</p><p className="mt-1 text-sm text-white/45">Berkendara dengan etika, bergerak dengan bijak.</p></div>
          <p className="text-sm text-white/45">Project edukasi keselamatan jalan &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
