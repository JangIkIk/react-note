import React from "react";
import "./homeSortBtns.css";
import {HomeSortButton} from "@features/homeSortButton/index";
import {useSortList} from "@entities/homeList/index";


export const HomeSortBtns = () =>{
    const {categoryBtnData} = useSortList();
    return(
        <div className="homeSortBtns">
            <HomeSortButton>전체</HomeSortButton>
            {categoryBtnData && categoryBtnData.map( (value, idx) => <HomeSortButton key={idx}>{value}</HomeSortButton>)}
        </div>
    );
}