import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  href?: string;
  className?: string;
};

export default function Button({ children, href, className }: ButtonProps) {
  if (className === undefined) className = "base-button";

  if (!href) return <button className={className}>{children}</button>;
  else
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
}
