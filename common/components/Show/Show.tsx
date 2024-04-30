import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  when: boolean | (() => boolean) | number | string | undefined;
}>;

export const Show: FC<Props> = ({ children, when }) => {
  let canShow = false;

  switch (typeof when) {
    case "function":
      canShow = when();
      break;
    default:
      canShow = !!when;
      break;
  }

  return canShow ? <>{children}</> : null;
};
