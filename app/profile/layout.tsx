import { ProfileNavigationDrawer } from "@/profile/components/ProfileNavigationDrawer";
import type { LayoutProps } from "@/utils/types";

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <main className="grid grid-cols-[min-content,_1fr] grid-rows-1">
      <ProfileNavigationDrawer />
      <section className="bg-primary-blue min-h-screen p-4">{children}</section>
    </main>
  );
}
