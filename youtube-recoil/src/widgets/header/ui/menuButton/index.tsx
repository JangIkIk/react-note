import React from "react";
import styled from "styled-components";

// layers
import { useChangeTheme } from "@widgets/header/hooks/useChangeThemeAtom";

export const MenuButton = ()=>{
    const [mode] = useChangeTheme();
    return(
        <Style_menu>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={mode === "dark" ? "white" : "black"}><path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"/></svg>
        </Style_menu>
    );
}
const Style_menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    cursor: pointer;
`
