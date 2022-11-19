import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import building from "./building.jpg";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import schema from "./schema";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import Alert from "@mui/material/Alert";

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
  "& .MuiOutlinedInput-root.Mui-error": {
    borderColor: "red",
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
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    setSubmitted(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="subscribe-container">
        <div className="box-containers">
          <div className="grid-box">
            <div className="subscribe-box">
              <form
                action="POST"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p>Receive important updates and relevant news from us.</p>
                <StyledTextField
                  label="Your email"
                  variant="outlined"
                  type="email"
                  {...register("email")}
                  sx={{ marginBottom: "24px" }}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? errors.email.message : ""}
                  InputProps={
                    errors.email
                      ? {
                          endAdornment: (
                            <InputAdornment position="end">
                              <ErrorRoundedIcon color="error" />
                            </InputAdornment>
                          ),
                        }
                      : null
                  }
                />
                <Button type="submit" variant="contained">
                  Subscribe
                </Button>
                {submitted && (
                  <Alert severity="success">
                    Thanks for subscribing! We will send you relevant news and
                    updates.
                  </Alert>
                )}
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
