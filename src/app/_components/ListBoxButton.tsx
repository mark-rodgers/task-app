"use client";

import { useContext } from "react";
import { ListBoxContext } from "@/app/_components/ListBox";

export default function ListBoxButton() {
  const context = useContext(ListBoxContext);

  return (
    <button
      type="button"
      className={"rounded-full border-2 px-4 py-2 transition-colors " + (context?.isOpen ? "border-amber-300" : "border-stone-300")}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        context?.setIsOpen(!context.isOpen)
      }
    >
      {context?.selected?.value ? context.selected.value : "- Select -"}
    </button>
  );
}
