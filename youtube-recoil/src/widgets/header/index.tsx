import React from "react";

// slice
import { Style } from "./styles/header";
import { MenuButton } from "./ui/menuButton";
import { Logo } from "./ui/logo";
import { Search } from "./ui/search";
import { GuestBox } from "./ui/guestBox";


export const Header = () => {
    return(
        <Style.root>
            <Style.start>
                <MenuButton/>
                <Logo/>
            </Style.start>
            <Style.center>
                <Search/>
            </Style.center>
            <Style.end>
                <GuestBox/>
            </Style.end>
        </Style.root>
    );
}