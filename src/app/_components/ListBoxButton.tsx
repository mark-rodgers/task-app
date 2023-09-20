"use client";

import { useContext } from "react";
import { ListBoxContext } from "@/app/_components/ListBox";

export default function ListBoxButton() {
  const context = useContext(ListBoxContext);

  return (
    <button
      type="button"
      className="rounded-full border border-red-500 px-4 py-2"
      onClick={(e: React.MouseEvent) => context?.setIsOpen(!context.isOpen)}
    >
      {context?.selected?.value ? context.selected.value : "- Select -"}
    </button>
  );
}
