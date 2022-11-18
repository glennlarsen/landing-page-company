import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import building from "./building.jpg";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#28282A",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
  },
});

function Subscribe() {
  return (
    <ThemeProvider theme={theme}>
      <div className="subscribe-container">
        <div className="box-containers">
          <div className="grid-box">
            <div className="subscribe-box">
              <form action="POST">
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p>Receive important updates and relevant news from us.</p>
                <StyledTextField
                  label="Your email"
                  variant="outlined"
                  type="email"
                  sx={{ marginBottom: "24px" }}
                />
                <Button variant="contained">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="grid-box">
            <div className="spring-pattern"></div>
            <img src={building} alt="Building of company" />
          </div>
        </div>
        <div className="help">
          <Button variant="outlined">GOT ANY QUESTIONS? NEED HELP?</Button>
          <p>We are here to help. Get in touch!</p>
          <ChatBubbleLeftEllipsisIcon className="help-icon" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Subscribe;
