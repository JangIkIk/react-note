import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root{
        height: 100%;
    }

    html,body{
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    h1,h2,h3,p{
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
    }
    
`;