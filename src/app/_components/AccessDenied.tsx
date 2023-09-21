"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import PageTitle from "@/app/_components/PageTitle";
import Button from "@/app/_components/Button";

export default function AccessDenied() {
  const { data: session, status } = useSession();

  return (
    <div className="flex h-full items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <Image
          src="/not-found.jpg"
          alt="Empty"
          width={300}
          height={300}
          className="mb-8"
        />
        <PageTitle title="Access Denied." />
        <div className="mb-8">
          You don&apos;t have permission to access this page.
        </div>
        {status === "unauthenticated" && (
          <Button href={`/auth/login`}>Login</Button>
        )}
      </div>
    </div>
  );
}
