import React from "react";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

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
            <ThemeProvider theme={style}>
                <GlobalStyle/>
                <RouterProvider router={AppRouter}/>
            </ThemeProvider>
        );
}