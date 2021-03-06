import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px
        }
    }

    * { box-sizing: border-box; }

    a { color: black; text-decoration: none; }

    ::-webkit-scrollbar { width:5px }
    ::-webkit-scrollbar-thumb {
        background-color:rgb(0, 0, 0);
        border-radius:5px;
    }
`;