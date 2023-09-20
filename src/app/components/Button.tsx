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
  if (className === undefined) className = "base-button";

  if (!href)
    return (
      <button formAction={formAction} className={className}>
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
