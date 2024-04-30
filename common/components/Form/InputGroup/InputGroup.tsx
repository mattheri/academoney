import type { FC, PropsWithChildren } from "react";

import { cx } from "@/utils/cx";

import type { InputGroupVariantProps } from "./InputGroup.style";
import { inputGroup } from "./InputGroup.style";

type Props = PropsWithChildren<
  {
    className?: string;
  } & InputGroupVariantProps
>;

export const InputGroup: FC<Props> = ({
  className,
  direction = "vertical",
  children,
}) => {
  return <div className={cx(inputGroup({ direction }))}>{children}</div>;
};
