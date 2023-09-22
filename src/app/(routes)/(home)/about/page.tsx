import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="mx-auto h-0 w-0 animate-bounce border-b-[150px] border-l-[100px] border-r-[100px] border-b-yellow-500 border-l-transparent border-r-transparent"></div>
        <div className="my-4 text-center">Developed by Mark Rodgers</div>
        <div className="flex flex-row justify-center">
          <Link href="https://github.com/mark-rodgers/task-app" target="_blank">
            <Image src="/logo-github.svg" alt="GitHub" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
