"use client";

import type { FC } from "react";

type Font = {
  fontFamily: string;
  fontStyle?: string;
  fontWeight?: number;
};

type Props = {
  fonts: Font[];
};

export const Fonts: FC<Props> = ({ fonts }) => {
  const fontFaces = fonts
    .map(
      ({ fontFamily, fontStyle, fontWeight }) => `
		@font-face {
			font-family: ${fontFamily};
			font-style: ${fontStyle || "normal"};
			font-weight: ${fontWeight || 400};
		}
	`
    )
    .join("");

  const fontVariables = fonts
    .map(({ fontFamily }, index) => `--font-${index + 1}: ${fontFamily};`)
    .join("");

  return (
    <style jsx global>
      {`
        :root {
          ${fontVariables}
        }
        ${fontFaces}
      `}
    </style>
  );
};
