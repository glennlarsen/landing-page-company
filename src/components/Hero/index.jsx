import React from "react";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#FF3366",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <div className="hero-image">
        <div className="hero-text">
          <h1>upgrade your company</h1>
          <span className="under-line"></span>
          <p className="slogan">
            We offer a complete solution from start to end.
          </p>
          <Button variant="contained">Our services</Button>
          <span className="slogan2">Premium service and quality</span>
        </div>
        <KeyboardDoubleArrowDownIcon
          sx={{
            color: "#005B70",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "Translate(-50%, -50%)",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Hero;
