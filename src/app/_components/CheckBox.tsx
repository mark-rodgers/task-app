"use client";

import { twMerge } from "tailwind-merge";

type CheckBoxProps = {
  id: string;
  name?: string;
  defaultChecked?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckBox({
  id,
  name,
  defaultChecked,
  className,
  onChange,
}: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      defaultChecked={defaultChecked}
      className={twMerge(
        "ml-2 h-3 w-3 cursor-pointer rounded-full appearance-none transition-colors bg-white ring-1 ring-stone-400 ring-offset-4 checked:bg-amber-500 checked:ring-amber-500 hover:ring-amber-500",
        className,
      )}
      onChange={onChange}
    />
  );
}
