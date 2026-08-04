import { Bike, BusFront, CarFront, Footprints } from "lucide-react";

const zebraLines = [0, 1, 2, 3, 4, 5];

export default function RoadDiorama() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[510px] [perspective:1100px]" aria-label="Ilustrasi tiga dimensi jalan sebagai ruang bersama">
      <div className="absolute inset-[8%] rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute inset-[14%] preserve-3d [transform:rotateX(58deg)_rotateZ(-32deg)]">
        <div className="absolute inset-0 translate-x-5 translate-y-8 rounded-[2.5rem] bg-[#071c2d]/45 blur-sm [transform:translateZ(-28px)]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/50 bg-[#dcebf0] shadow-2xl [transform:translateZ(0)]">
          <div className="absolute inset-x-0 top-[36%] h-[28%] bg-[#263e51]" />
          <div className="absolute inset-y-0 left-[36%] w-[28%] bg-[#263e51]" />

          <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_22px,#ffd47b_22px,#ffd47b_46px)] opacity-80" />
          <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_22px,#ffd47b_22px,#ffd47b_46px)] opacity-80" />

          <div className="absolute left-[24%] top-[7%] size-[18%] rounded-2xl bg-[#b8d8df] shadow-inner" />
          <div className="absolute bottom-[7%] right-[7%] size-[24%] rounded-2xl bg-[#c7e1dd] shadow-inner" />
          <div className="absolute right-[8%] top-[8%] flex gap-2">
            {["bg-[#70a5b4]", "bg-[#8bc0c1]", "bg-[#5e91a9]"].map((color) => <span key={color} className={`block size-8 rounded-full ${color} shadow-md`} />)}
          </div>

          <div className="absolute left-[18%] top-[38%] flex gap-2">
            {zebraLines.map((line) => <span key={line} className="block h-12 w-2.5 bg-white/90" />)}
          </div>
          <div className="absolute bottom-[18%] left-[38%] flex flex-col gap-2">
            {zebraLines.map((line) => <span key={line} className="block h-2.5 w-12 bg-white/90" />)}
          </div>
        </div>

        <div className="absolute left-[43%] top-[10%] grid size-14 place-items-center rounded-2xl border border-white/70 bg-[#8ed5ed] text-[#163750] shadow-xl [transform:translateZ(24px)]">
          <CarFront size={29} strokeWidth={1.8} />
        </div>
        <div className="diorama-float absolute bottom-[8%] left-[45%] grid size-16 place-items-center rounded-2xl border border-white/70 bg-sun text-ink shadow-xl [animation-delay:-2.2s]">
          <BusFront size={31} strokeWidth={1.8} />
        </div>
        <div className="absolute right-[8%] top-[43%] grid size-13 place-items-center rounded-2xl border border-white/70 bg-white text-forest shadow-xl [transform:translateZ(24px)]">
          <Bike size={27} strokeWidth={1.8} />
        </div>
        <div className="absolute left-[8%] top-[13%] grid size-13 place-items-center rounded-2xl border border-white/70 bg-white text-forest shadow-xl [transform:translateZ(24px)]">
          <Footprints size={25} strokeWidth={1.8} />
        </div>

        <div className="absolute right-[29%] top-[28%] flex h-16 w-6 flex-col items-center justify-center gap-1 rounded-full border border-white/30 bg-[#102a43] shadow-xl [transform:translateZ(45px)]">
          <span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="beacon size-2.5 rounded-full bg-sky-300" />
        </div>
      </div>

      <div className="absolute left-1 top-[20%] rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left text-white shadow-xl backdrop-blur">
        <p className="text-xs font-bold text-sun">01</p><p className="mt-1 text-sm font-bold">Jaga jarak</p>
      </div>
      <div className="absolute bottom-[14%] right-0 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left text-white shadow-xl backdrop-blur">
        <p className="text-xs font-bold text-sun">02</p><p className="mt-1 text-sm font-bold">Beri ruang</p>
      </div>
    </div>
  );
}
