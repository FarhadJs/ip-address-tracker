import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(0, 0%, 17%)", // Very Dark Gray
    },
    secondary: {
      main: "hsl(0, 0%, 59%)", // Dark Gray
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
    fontSize: 18,
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375, // Mobile breakpoint
      md: 768,
      lg: 1440, // Desktop breakpoint
      xl: 1920,
    },
  },
});
