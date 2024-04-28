import type { ReactNode } from "react";

export type PageProps<
  Params extends Record<string, string> = {},
  SearchParams extends Record<string, string | string[]> = {}
> = {
  params?: Params;
  searchParams?: SearchParams;
};

export type LayoutProps<
  IntersectedRoutes extends Record<string, ReactNode> = {}
> = {
  children?: ReactNode;
} & IntersectedRoutes;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
