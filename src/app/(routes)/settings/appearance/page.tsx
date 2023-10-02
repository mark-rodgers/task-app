import Button from "@/app/_components/Button";
import CircleCheckedIcon from "@/app/_components/icons/CircleCheckedIcon";

export default function AppearanceSettings() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-slate-500 text-white shadow-xl transition-shadow hover:shadow-slate-500/50">
          <span className="mb-2 mr-4 text-xl">01</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-stone-500 text-white shadow-xl transition-shadow hover:shadow-stone-500/50">
          <span className="mb-2 mr-4 text-xl">02</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-red-500 text-white shadow-xl transition-shadow hover:shadow-red-500/50">
          <span className="mb-2 mr-4 text-xl">03</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-amber-500 text-white shadow-xl transition-shadow hover:shadow-amber-500/50">
          <span className="mb-2 mr-4 text-xl">04</span>
          <CircleCheckedIcon className="absolute left-0 top-0 m-2" />
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-green-500 text-white shadow-xl transition-shadow hover:shadow-green-500/50">
          <span className="mb-2 mr-4 text-xl">05</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-sky-500 text-white shadow-xl transition-shadow hover:shadow-sky-500/50">
          <span className="mb-2 mr-4 text-xl">06</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-violet-500 text-white shadow-xl transition-shadow hover:shadow-violet-500/50">
          <span className="mb-2 mr-4 text-xl">07</span>
        </button>
        <button className="relative flex h-20 items-end justify-end rounded-xl bg-pink-500 text-white shadow-xl transition-shadow hover:shadow-pink-500/50">
          <span className="mb-2 mr-4 text-xl">08</span>
        </button>
      </div>
      <div className="mt-2 flex justify-end">
        <Button>Save</Button>
      </div>
    </>
  );
}
