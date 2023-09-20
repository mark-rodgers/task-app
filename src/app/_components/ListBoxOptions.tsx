"use client";

import { useContext } from "react";
import { ListBoxContext } from "@/app/_components/ListBox";

type ListBoxOptionsProps = {
  children: React.ReactNode;
};

export default function ListBoxOptions({ children }: ListBoxOptionsProps) {
  const context = useContext(ListBoxContext);

  if (context && context.isOpen) return <div>{children}</div>;
}
