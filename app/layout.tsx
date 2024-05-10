import "@/styles/global.css";
import type { LayoutProps } from "@/utils/types";

import { Crimson_Pro, Mulish } from "next/font/google";

import { Fonts } from "@/common/components/Fonts/Fonts";
import { AuthProvider } from "@/auth/components/AuthProvider";

const mulish = Mulish({
  subsets: ["latin"],
  preload: true,
  fallback: ["sans-serif"],
  display: "swap",
});
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  style: ["italic", "normal"],
  preload: true,
  fallback: ["serif"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Fonts fonts={[mulish.style, crimsonPro.style]} />
      <html lang="en">
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}
