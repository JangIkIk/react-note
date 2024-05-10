import React from "react";
import { ThemeProvider } from "styled-components";
import { useChangeTheme } from "@shared/hooks/useChangeTheme";
import theme from "./Theme";


export const ThemeContext = (props: {children: React.ReactNode})=>{
    const [mode] = useChangeTheme();
    const {children} = props
    const style = {
        fontSize: theme.fontSize,
        ...(mode === "dark" ? theme.dark : theme.light)
    };
    

    return(
        <ThemeProvider theme={style}>
            {children}
        </ThemeProvider>
    )
}
