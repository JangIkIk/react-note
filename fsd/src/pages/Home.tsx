import React from "react";
import {SortBtns} from "@features/home-sort-btns/SortBtns";
import {HomeLists} from "@features/home-lists/HomeLists";

export const Home = ()=>{    
    return(
        <>
            <SortBtns/>
            <HomeLists/>
        </>
    );
}