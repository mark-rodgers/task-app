"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  formAction?: (data: FormData) => void;
};

export default function Button({
  children,
  href,
  className,
  onClick,
  formAction,
}: ButtonProps) {
  const { pending } = useFormStatus();

  const classes = twMerge(
    "rounded-full border-2 border-amber-400 bg-amber-400 px-12 py-2 font-bold text-amber-700 outline-none transition-colors hover:border-amber-300 hover:bg-amber-300 focus:border-amber-300 focus:bg-amber-300",
    className,
  );

  if (!href)
    return (
      <button
        className={classes}
        onClick={onClick}
        formAction={formAction}
        disabled={pending}
      >
        {children}
      </button>
    );
  else
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
}
