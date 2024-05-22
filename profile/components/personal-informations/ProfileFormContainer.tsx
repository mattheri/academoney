import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export const ProfileFormContainer: FC<Props> = ({ children }) => {
  return <section className="p-4 bg-white rounded">{children}</section>;
};
