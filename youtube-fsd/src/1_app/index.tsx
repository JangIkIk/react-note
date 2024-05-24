import React from "react";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import theme from "./theme";
import { AppRouter } from "./AppRouter";
import { GlobalStyle } from "./globalStyle";

import {useUserStore} from "@shared/lib/index";

export const App = ()=>{
    const mode = useUserStore( state => state.mode);
    const style = {
        fontSize: theme.fontSize,
        ...(mode === "dark" ? theme.dark : theme.light)
    };

    return(
            // <CookiesProvider>
            // 이게 정확히 무슨용도냐
                <ThemeProvider theme={style}>
                    <GlobalStyle/>
                    <RouterProvider router={AppRouter}/>
                </ThemeProvider>
            // </CookiesProvider>
        );
}