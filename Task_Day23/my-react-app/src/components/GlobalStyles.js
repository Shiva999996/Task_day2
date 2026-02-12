import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
