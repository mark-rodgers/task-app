import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UserMenu from "./components/UserMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description: "Basic Todo App",
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
            <ul className="text-stone-500">
              <li className="font-bold">Tasks</li>
              <li>
                <ul>
                  <li>Task List 1</li>
                </ul>
                <ul>
                  <li>Task List 2</li>
                </ul>
                <ul>
                  <li>+ New Task List</li>
                </ul>
              </li>
            </ul>
          </nav>
          <UserMenu />
        </header>
        <main className="flex-1">
          <div className="container mx-auto min-h-full p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
