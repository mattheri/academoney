import { FC, FormHTMLAttributes } from "react";

import { cx } from "@/utils/cx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <form className={cx("contents", className)} {...rest}>
      {children}
    </form>
  );
};
