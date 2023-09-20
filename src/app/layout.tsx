import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import TaskListNav from "./components/TaskListNav";
import UserMenu from "./components/UserMenu";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task App",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full`}>
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
      </body>
    </html>
  );
}
