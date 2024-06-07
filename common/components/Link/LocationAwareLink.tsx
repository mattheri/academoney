"use client";

import { cx } from "@/utils/cx";
import NextLink from "next/link";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { FC, AnchorHTMLAttributes, MouseEvent } from "react";

import { forwardRef } from "react";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocationAwareLink: FC<Props> = forwardRef<
  HTMLAnchorElement,
  Props
>(({ href, className, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  const canActivate = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isActive) event.preventDefault();
  };

  return (
    <NextLink
      onClick={canActivate}
      ref={ref}
      href={href}
      className={cx(
        "",
        {
          "text-primary-blue underline underline-offset-2": isActive,
          "text-primary-blue hover:underline hover:underline-offset-2":
            !isActive,
        },
        className
      )}
      {...props}
    />
  );
});
