"use client";

import { useContext } from "react";
import { ListBoxContext } from "@/app/_components/ListBox";

type ListBoxOptionProps = {
  id: number;
  value: string;
  children: React.ReactNode;
};

export default function ListBoxOption({
  id,
  value,
  children,
}: ListBoxOptionProps) {
  const context = useContext(ListBoxContext);

  return (
    <div className={"block px-4 py-2 text-sm text-gray-700 " + (context?.selected?.id === id ? "bg-gray-100" : "hover:bg-gray-100")}>
      <button
        type="button"
        className="w-full text-left"
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          context?.setSelected({ id, value })
        }
      >
        {children}
      </button>
    </div>
  );
}
