import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; //installed through npm install styled-reset

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        /* Approximately 1.3rem=16px *** 1.7vw=16px *** 1rem = 16px */
        font-size: clamp(1rem, 1.7vw, 1rem);
        font-weight: 300;
        font-family: "Montserrat", Helvetica, sans-serif;
    }

    html, body {
        background-color: #000;
        color: #fff;
        scrollbar-color: hsla(0, 0%, 100%, 0.3) transparent;
        scrollbar-width: 16px;
        height: 100%;
    }
    body {
        font-family: ${props => props.theme.fonts.base};
        margin: 0;
    }

    h1 {
        /* Approximately 2=32px *** 1.7vw=31.62px-19.28px *** 1.2rem=19.2px */
        font-size: clamp(1.2rem, 1.7vw, 2rem);
        font-weight: 600;
    }

    h2 {
        /* Approximately 1.3rem=20.8px *** 1.7vw=20.7px-16.031px *** 1rem = 16px */
        font-size: clamp(1rem, 1.7vw, 1.3rem);
        font-weight: 600;
    }

    h3 {
        /* Approximately 1.15rem=18.4px *** 1.7vw=18.3px-17.7px *** 1.1rem = 17.6px */
        font-size: clamp(1.1rem, 1.7vw, 1.15rem);
        font-weight: 600;
    }

    h4 {
        /* Approximately 1rem = 16px *** 1.7vw=16px *** 1rem = 16px */
        font-size: clamp(1rem, 1.7vw, 1rem);
        font-weight: 600;
    }

    h5 {
        /* Approximately .9rem=14.4px *** 1.7vw=16px *** .9rem=14.4px */
        font-size: clamp(0.9rem, 1.7vw, 0.9rem);
        font-weight: 600;
    }

    h6 {
        /* Approximately .9rem=14.4px *** 1.7vw=16px *** .9rem=14.4px */
        font-size: clamp(1rem, 1.7vw, 1rem);
        font-weight: 300;
    }

    input {
        font-family: inherit;
        line-height: inherit;
        color: #2e3750;
        min-width: 10em;
        /* the border gradient */
        -o-border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;
            border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;
    }

    a {
        /* text-decoration: none; */
        color: #fff;
    }

    button {
        cursor: pointer;
    }

    footer {
        background-color: #000;
    }
`

export default GlobalStyle;