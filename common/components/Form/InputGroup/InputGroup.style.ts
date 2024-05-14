import type { VariantProps } from "cva";
import { cva } from "cva";

export const inputGroup = cva("flex [&_label]:sr-only", {
  variants: {
    direction: {
      vertical:
        "flex-col [&_*:first-of-type]:rounded-t-md [&_*:first-of-type]:rounded-b-none [&_*:last-of-type]:rounded-b-md [&_*:last-of-type]:rounded-t-none",
      horizontal:
        "flex-row [&_*:first-of-type]:rounded-l-md [&_*:first-of-type]:rounded-r-none [&_*:last-of-type]:rounded-r-md [&_*:last-of-type]:rounded-l-none",
    },
  },
});

export type InputGroupVariantProps = VariantProps<typeof inputGroup>;
