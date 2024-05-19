import type { FC, PropsWithChildren } from "react";
import { readdir } from "fs/promises";
import { cwd } from "process";
import path from "path";
import Link from "next/link";
import { LocationAwareLink } from "@/common/components/Link/LocationAwareLink";

type Path = {
  name: string;
  path: string;
};

type Paths = Path[];

export const ProfileNavigationDrawer: FC = async () => {
  const files = await readdir(path.join(cwd(), "app/profile"), {
    withFileTypes: true,
  });

  const paths = files.reduce<Paths>((acc, file) => {
    if (file.isDirectory()) {
      acc.push({
        name: `${file.name.charAt(0).toUpperCase()}${file.name.slice(1)}`,
        path: `/profile/${file.name}`,
      });
    }

    return acc;
  }, []);

  return (
    <nav className="p-4 flex flex-col gap-4">
      {paths.map(({ name, path }) => {
        return (
          <LocationAwareLink key={path} href={path}>
            {name}
          </LocationAwareLink>
        );
      })}
    </nav>
  );
};
