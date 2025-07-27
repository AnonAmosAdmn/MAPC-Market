import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const chakraTheme = extendTheme({
  config: chakraThemeConfig,
  colors: {
    // Override gray to use true black (900) everywhere
    gray: {
      900: "#000000", // Pure black
      800: "#171717", // Slightly lighter black (fallback)
    },
    indigo: {
      500: "#6366f1", // Default Indigo
      600: "#4f46e5", // Darker Indigo (hover)
    },
  },
  styles: {
    global: {
      // Apply black background globally
      body: {
        bg: "gray.900",
        color: "white",
      },
    },
  },
  components: {
    // Style all buttons to use indigo + white text
    Button: {
      baseStyle: {
        fontWeight: "bold",
        color: "white", // Force white text
      },
      variants: {
        solid: {
          bg: "indigo.500",
          _hover: {
            bg: "indigo.600",
          },
        },
        // Optional: Override other variants (ghost, outline, etc.)
        ghost: {
          color: "white",
          _hover: {
            bg: "whiteAlpha.200",
          },
        },
      },
    },
    // Ensure other components (Input, Card, etc.) use black backgrounds
    Input: {
      baseStyle: {
        field: {
          bg: "gray.800", // Slightly lighter than pure black
          color: "white",
        },
      },
    },
  },
});