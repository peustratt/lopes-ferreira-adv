import { createGlobalStyle, ThemeProvider} from "styled-components"
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    );
};

const theme = {
  colors: {
    main: "#1a2451",
    mainDark: "#666",
    black: "3a3a3a",
    gray: "#ececec",
    lightGray: "rgb(250, 250, 250)",
    white: "#fff;",
    secondary: "#ffbd4a"
  },
  font: {
    secondary: '"Playfair Display", serif',
  },
  shadows: {
    main: "rgba(79, 114, 205, 0.15) 0px 4px 24px 0px",
  }
};

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Custom Properties, update these for your own design */

:root {
    font-family: "Source Sans Pro", sans-serif;
}
/* General styles */

html {
    scroll-behavior: smooth;
    width: 100%;
}

body {
    width: 100%;
}

html,
body,
body > div:first-child,
div#__next,
div#__next > div {
    height: 100%;
}

img {
    display: block;
    max-width: 100%;
}

h1 {
    font-size: clamp(3.5rem, 5vw, 5rem);
}

h2,
h3 {
    color: ${theme.colors.black};
}

#fundo {
    position: fixed;
    background-color: ${theme.colors.main};
    inset: 0;
    opacity: 0.7;
    z-index: 5;
}

::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`