import type { FC, FormHTMLAttributes } from "react";

import { cx } from "@/utils/cx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<Props> = ({ children, className, ...props }) => {
  return (
    <form className={cx("contents", className)} {...props}>
      {children}
    </form>
  );
};
