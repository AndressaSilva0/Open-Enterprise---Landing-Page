import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        gray400: "gainsboro",
        gray500: "lightgray",
        blue500: "dodgerblue",
        purple500: "#6200ea",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
      },
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "15px",
        4: "17px",
        5: "19px",
        6: "21px",
      },
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        1: "4px",
        2: "8px",
        3: "16px",
        round: "9999px",
      },
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    media: {
      // BREAKPOINTS DE RESPONSIVIDADE:
      // bp1: Celulares pequenos
      // bp2: Celulares modernos e Tablets em pé (Ponto principal de quebra de layout)
      // bp3: Tablets deitados e Laptops pequenos
      // bp4: Desktops padrão
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
      bp4: "(max-width: 1280px)",
    },
  });
