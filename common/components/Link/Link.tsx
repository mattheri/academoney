import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { AnchorHTMLAttributes, FC } from "react";

import { cx } from "@/utils/cx";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export const Link: FC<Props> = ({ href, className, children, ...rest }) => {
  return (
    <NextLink
      href={href}
      {...rest}
      className={cx("font-medium text-blue-600 hover:text-blue-500", className)}
    >
      {children}
    </NextLink>
  );
};
