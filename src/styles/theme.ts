"use client";
import { createTheme, rem } from "@mantine/core";
import { themeColors } from "@/utils/themeColors";

export const theme = createTheme({
  primaryColor: 'defaultColor',
  fontFamily: 'Montserrat, sans-serif',
  headings: {
    fontFamily: 'Belleza, serif',
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  colors: themeColors,
});
