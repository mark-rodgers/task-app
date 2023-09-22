"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  signOut({ callbackUrl: "/auth/login" });
  return <div>Signing out...</div>;
}
