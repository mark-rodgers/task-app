"use client";

import { signOut } from "next-auth/react";
import Loading from "@/app/_components/Loading";

export default function Logout() {
  signOut({ callbackUrl: "/auth/login" });
  return <Loading />;
}
