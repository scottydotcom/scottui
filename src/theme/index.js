import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  colors: {
    brand: {
      100: "#ffe8f0",
      200: "#ffb3c8",
      300: "#ff7aa1",
      400: "#ff3f7a",
      500: "#ff0055",
      600: "#cc0044",
      700: "#990033",
      800: "#660022",
      900: "#330011",
    },

    accent: {
      50: "#e8faff",
      500: "#00c8ff",
    },

    highlight: "#5271AA",
    softBlue: "#AFCBFF",
    sand: "#CDB88F",

    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b",
    },
  },

  semanticTokens: {
    colors: {
      bg: {
        default: "#0a192f",
        _dark: "#0a192f",
      },
      text: {
        default: "#ccd6f6",
        _dark: "#ccd6f6",
      },
      muted: {
        default: "#8892b0",
        _dark: "#8892b0",
      },
      accent: {
        default: "accent.500",
        _dark: "accent.500",
      },
    },
  },

  styles: {
    global: {
      body: {
        bg: "bg",
        color: "text",
      },
    },
  },
});

export default theme;
