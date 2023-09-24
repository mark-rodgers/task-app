"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import PageTitle from "@/app/_components/PageTitle";
import Loading from "@/app/_components/Loading";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loading />;
  else if (status === "unauthenticated") redirect("/auth/login");

  return (
    <>
      <PageTitle title="Dashboard" />
      <main>
        <div>TODO: Dashboard</div>
        <div>
          <div className="my-4 text-xl font-bold">Due Today</div>
          <div>...</div>
        </div>
        <div>
          <div className="my-4 text-xl font-bold">Late Tasks</div>
          <div>...</div>
        </div>
        <div>
          <div className="my-4 text-xl font-bold">Upcoming Tasks</div>
          <div>...</div>
        </div>
      </main>
    </>
  );
}
