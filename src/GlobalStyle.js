import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

body {
    font-family: 'Karla', sans-serif;
    font-weight: 200;
    line-height: 1.5;
    font-size: 16px;
    margin: 0px auto;
}
`;