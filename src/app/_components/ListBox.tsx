"use client";

import { createContext, useState, useEffect } from "react";

type ListBoxProps = {
  name: string;
  children: React.ReactNode;
  defaultId: string;
  defaultValue: string;
  className?: string;
};

export const ListBoxContext = createContext<{
  selected: { id?: number; value?: string };
  isOpen: boolean;
  setSelected: (selected: { id: number; value: string }) => void;
  setIsOpen: (isOpen: boolean) => void;
} | null>(null);

export default function ListBox({
  name,
  children,
  defaultId,
  defaultValue,
  className,
}: ListBoxProps) {
  const [selected, setSelected] = useState({
    id: +defaultId,
    value: defaultValue,
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: MouseEvent) {
    setIsOpen(false);
  }

  useEffect(() => {
    if (defaultId && defaultValue) {
      setSelected({ id: +defaultId, value: defaultValue });
    }
  }, [defaultId, defaultValue]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <ListBoxContext.Provider
      value={{ selected, setSelected, isOpen, setIsOpen }}
    >
      <div>
        {children}
        <input type="hidden" name={name} value={selected.id} />
      </div>
    </ListBoxContext.Provider>
  );
}
