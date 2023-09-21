"use client";

import { redirect } from "next/navigation";
// import { getProviders, signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
import Button from "@/app/_components/Button";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "authenticated") redirect("/");

  return (
    <div className="flex w-full items-center justify-center bg-black">
      <div className="flex max-w-sm flex-col gap-1 bg-white p-4">
        <Button className="border-stone-600 bg-transparent text-stone-600 hover:border-stone-800 hover:bg-transparent">
          Sign In with Google
        </Button>
        <Button className="border-stone-600 bg-transparent text-stone-600 hover:border-stone-800 hover:bg-transparent">
          Sign In with GitHub
        </Button>
      </div>
    </div>
  );
}
