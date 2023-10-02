"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

export default function NavLink({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side

    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href,
    ).pathname;

    // Using URL().pathname to get rid of query and hash
    const activePathname = new URL(location.href).pathname;

    const newClassName =
      linkPathname === activePathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    pathname,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
}
