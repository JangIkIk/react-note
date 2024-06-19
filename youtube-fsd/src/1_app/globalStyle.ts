import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
        background-color: red;
    }

    body{
        height: 100%;
        margin: 0;
        padding: 0;
    }

    /* html,body{
        height: 100vh;
        margin: 0;
        padding: 0;
        font-size: 16px;
    } */

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

    #root{
        height: 100%;
    }

    #test{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;
