"use client";

import { useContext } from "react";
import { ListBoxContext } from "@/app/_components/ListBox";

type ListBoxOptionsProps = {
  children: React.ReactNode;
};

export default function ListBoxOptions({ children }: ListBoxOptionsProps) {
  const context = useContext(ListBoxContext);

  if (context && context.isOpen)
    return (
      <div className="absolute bottom-0 left-0 mt-2 w-48 translate-y-[110%] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="py-1">
        {children}
        </div>
      </div>
    );
}
