import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#e5e5e5",
    secondary: "#b22e6f",
    white: "#fff",
    whiteSoft: "#f8f4ef",
    black: "#000",
    blackSoft: "#333333",
    gray: "#999999",
    green: "#4caf50",
  },
  font: {
    fontFamily: "Heebo, sans-serif",
    regular: 400,
    medium: 500,
  },
  boxShadow: "rgba(0, 0, 0, 0.08) 0rem 0.125rem 0.25rem 0rem",
};

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.regular};
  font-size: 1rem;
  color: ${theme.colors.blackSoft};
  
  -webkit-font-smoothing: antialiased;
  
  background-color: ${theme.colors.whiteSoft};
}

a, button {
  cursor: pointer;
  text-decoration: none;
}

button, input {
  border: none;
}

img {
  width: auto;
  height: auto;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {
  background-color: transparent;
  width: 0.625rem;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.primary};
  border-radius: 0.625rem;
  border: 0.3125rem solid transparent;
}

::-webkit-scrollbar-button {
  display: none;
}
`;

export { GlobalStyle, theme };
