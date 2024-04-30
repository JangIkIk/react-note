import React from "react";
import { HomeSortButtons } from "@app/features/home-sort-btns/HomeSortBtns";
import {HomeLists} from "@features/home-lists/HomeLists"

export const Home = ()=>{    
    return(
        <>
            <HomeSortButtons/>
            <HomeLists/>
        </>
    );
}