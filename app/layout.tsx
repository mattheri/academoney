import "@/styles/global.css";

import type { LayoutProps } from "@/utils/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
