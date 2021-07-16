import { AppProps } from "next/dist/next-server/lib/router/router";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
