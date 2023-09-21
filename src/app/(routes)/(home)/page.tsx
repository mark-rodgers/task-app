"use client";

import PageTitle from "@/app/_components/PageTitle";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

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
