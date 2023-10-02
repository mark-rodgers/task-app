import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import PageTitle from "@/app/_components/PageTitle";
import SettingsClose from "@/app/_components/SettingsClose";
import NavLink from "@/app/_components/NavLink";

import type { Session } from "next-auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) redirect("/auth/login");

  return (
    <main className="container mx-auto flex min-h-full flex-col p-4">
      <PageTitle title="Settings">
        <SettingsClose />
      </PageTitle>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <NavLink
            href="/settings/account"
            activeClassName="bg-stone-100"
            className="mb-2 rounded-xl p-3 pr-24 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100"
          >
            My Account
          </NavLink>
          <NavLink
            href="/settings/appearance"
            activeClassName="bg-stone-100"
            className="mb-2 rounded-xl p-3 pr-24 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100"
          >
            Appearance
          </NavLink>
          <NavLink
            href="/settings/billing"
            activeClassName="bg-stone-100"
            className="mb-2 rounded-xl p-3 pr-24 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100"
          >
            Billing
          </NavLink>
          <NavLink
            href="/settings/import"
            activeClassName="bg-stone-100"
            className="mb-2 rounded-xl p-3 pr-24 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100"
          >
            Import
          </NavLink>
        </div>
        <div className="w-full px-4">{children}</div>
      </div>
    </main>
  );
}
