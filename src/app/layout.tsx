import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TaskListNavLink from "./components/TaskListNavLink";
import UserMenu from "./components/UserMenu";
import Button from "./components/Button";

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
          <nav className="p-4">
            <div className="text-stone-500">
              <div className="font-bold">Tasks</div>
              <TaskListNavLink id={1} title="Task List 1" />
              <TaskListNavLink id={2} title="Task List 2" />
              <TaskListNavLink id={3} title="Task List 3" />
              <div className="mt-4 flex items-center justify-center">
                <Button href="/tasklist/add">New Task List</Button>
              </div>
            </div>
          </nav>
          <UserMenu />
        </header>
        <main className="flex-1">
          <div className="container mx-auto h-full p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
