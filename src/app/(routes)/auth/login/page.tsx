"use client";

import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
import Button from "@/app/_components/Button";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "authenticated") redirect("/");

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-sm flex-col gap-3 bg-white p-4">
        <Button
          onClick={(e: React.MouseEvent<HTMLElement>) => signIn("google")}
        >
          Sign In with Google
        </Button>
        <Button
          onClick={(e: React.MouseEvent<HTMLElement>) => signIn("github")}
        >
          Sign In with GitHub
        </Button>
      </div>
    </div>
  );
}
