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
    <div className="bg-red-200 hover:bg-red-500">
      <button
        type="button"
        className="w-full text-left"
        onClick={(e: React.MouseEvent) => context?.setSelected({ id, value })}
      >
        {children}
      </button>
    </div>
  );
}
