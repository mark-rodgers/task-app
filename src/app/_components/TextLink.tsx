import Link from "next/link";

type TextLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function TextLink({ href, className, children }: TextLinkProps) {
  return (
    <Link href={href} className={`text-amber-400 underline ${className}`}>
      {children}
    </Link>
  );
}
