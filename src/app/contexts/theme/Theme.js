import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    blackBg: "#050812",
    primaryAccentColor: "#00B0F0",
    secondaryAccentColor: "#F4BE18",
  },
  // fonts: ["Montserrat", "Open Sans"],
  fontSizes: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    elarge: "3.5rem",
    slarge: "5rem",
    btn: "1.2rem",
  },
  fontWeights: {
    "light": 300,
    "normal": 400,
    "bold": 700
  },
  borderRadius: {
    small: "0.1875rem",
    circle: "50%",
  },
  width: {
    small: "576px",
    medium: "768px",
    large: "1280px",
    elarge: "1600px",
  },
  transition: {
    normal: "all 0.2s ease"
  }
};


const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;