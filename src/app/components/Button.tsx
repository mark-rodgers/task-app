"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  href?: string;
  className?: string;
  formAction?: (data: FormData) => void;
};

export default function Button({
  children,
  href,
  className,
  formAction,
}: ButtonProps) {
  const { pending } = useFormStatus();
  if (className === undefined) className = "base-button";

  if (!href)
    return (
      <button formAction={formAction} className={className} disabled={pending}>
        {children}
      </button>
    );
  else
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
}
