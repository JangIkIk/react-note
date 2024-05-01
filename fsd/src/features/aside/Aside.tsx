import React from "react";
import "./aside.css";
import { AsideCategory } from "./ui/asideCategory/AsideCategory";
import { MenuDetails } from "../aside-menu-details/MenuDetails";
import { useAppSelector } from "@app/state/store";


export const Aside = ()=>{
    const selector = useAppSelector( state => state.HeaderMenuModalSlice.value);
    return(
        <>
            {selector ? <MenuDetails/> : <AsideCategory/>}
        </>
    );
}