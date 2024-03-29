import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { Analytics } from "@vercel/analytics/react";
import { authOptions } from "@/auth";
import SessionProvider from "@/app/_components/SessionProvider";
import DebugBreakpoints from "@/app/_components/DebugBreakpoints";

import type { Metadata } from "next";
import type { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task App",
  description: "Task Management Application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <SessionProvider session={session}>{children}</SessionProvider>
        {process.env.NODE_ENV === "production" ? (
          <Analytics />
        ) : (
          <DebugBreakpoints enabled={true} />
        )}
      </body>
    </html>
  );
}
