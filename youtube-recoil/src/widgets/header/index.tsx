import React from "react";

// slice
import { Style } from "./styles/header";
import { MenuButton } from "./ui/menuButton";
import { Logo } from "./ui/logo";


export const Header = () => {
    return(
        <Style.root>
            <Style.start>
                <MenuButton/>
                <Logo/>
            </Style.start>
            <Style.center></Style.center>
            <Style.end></Style.end>
        </Style.root>
    );
}