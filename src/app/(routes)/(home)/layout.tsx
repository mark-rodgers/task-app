import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import TaskListNav from "@/app/_components/TaskListNav";
import UserMenu from "@/app/_components/UserMenu";

import type { Session } from "next-auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) redirect("/auth/login");

  return (
    <main className="flex min-h-full">
      <header className="flex w-full max-w-xs flex-col justify-between bg-stone-100">
        <div>
          <div className="mx-4 mt-4 font-bold text-stone-500">
            <Link href="/">Dashboard</Link>
          </div>
          <TaskListNav />
        </div>
        <UserMenu />
      </header>
      <main className="flex-1">
        <div className="container mx-auto h-full p-4">{children}</div>
      </main>
    </main>
  );
}
