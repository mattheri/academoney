import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  condition?: string | number | boolean | null | (() => boolean);
}>;

export const Show: FC<Props> = ({ condition, children }) => {
  let canShow = false;

  switch (typeof condition) {
    case "function":
      canShow = condition();
      break;
    default:
      canShow = Boolean(condition);
      break;
  }

  return canShow ? <>{children}</> : null;
};
