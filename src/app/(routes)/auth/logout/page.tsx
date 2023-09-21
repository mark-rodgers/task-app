"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  signOut({ callbackUrl: "/about" });
  return <div>Signing out...</div>;
}
