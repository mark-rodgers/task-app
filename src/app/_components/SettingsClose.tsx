"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CloseIcon from "@/app/_components/icons/CloseIcon";

export default function SettingsClose() {
  const router = useRouter();

  const onClose = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    router.push("/");
  };

  useEffect(() => {
    window.addEventListener("keydown", onClose);

    return () => {
      window.removeEventListener("keydown", onClose);
    };
  }, []);

  return (
    <Link
      href="/"
      className="flex flex-col items-center text-stone-700 transition-colors hover:text-stone-500"
    >
      <CloseIcon className="h-12" />
      <span className="text-sm font-bold">ESC</span>
    </Link>
  );
}
