import Image from "next/image";
import Button from "@/app/_components/Button";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#040205] p-4">
      <Image src="/404.gif" alt="Page not found" width={350} height={350} />
      <Button
        href="/"
        className="rounded-none border-white bg-black text-white hover:border-white hover:bg-white hover:text-black focus:border-white focus:bg-white focus:text-black"
      >
        Go Back
      </Button>
    </div>
  );
}
