import React from "react";
import "./aside.css";
import { AsideCategory } from "./ui/asideCategory/AsideCategory";
import { MenuDetails } from "../aside-menu-details/MenuDetails";
import { useAppSelector } from "@app/state/store";


/*
    수정필요(고민)
  컴포넌트를 굳이 나눠야하나 ?
*/
export const Aside = ()=>{
    const selector = useAppSelector( state => state.AsideMenuDetailsSlice.value);
    return(
        <>
            {selector ? <MenuDetails/> : <AsideCategory/>}
        </>
    );
}