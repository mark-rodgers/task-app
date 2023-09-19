import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  href?: string;
  className?: string;
};

export default function Button({ children, href, className }: ButtonProps) {
  const classes = classNames("base-button", className);

  if (!href) return <button className={classes}>{children}</button>;
  else
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
}
