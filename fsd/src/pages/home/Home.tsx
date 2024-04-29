import React from "react";
import "./home.css";
import { HomeSortButton } from "@features/home-sort-btn/HomeSortBtn";
import {categoryBtnData} from "@features/home-sort-btn/model/data"
import {useSortList} from "@features/home-list/hooks/useSortList"
import {HomeList} from "@features/home-list/HomeList"


export const Home = ()=>{
    const {listData} = useSortList();
    
    return(
        <div className="home">
            <div className="home-sort">
                {categoryBtnData && categoryBtnData.map( (value, idx) => <HomeSortButton key={idx}>{value}</HomeSortButton>)}
            </div>
            <div className="home-list">
                {listData && listData.map((value)=> {
                    return <div className="home-list__item" key={value.id}><HomeList data={value}/></div>
                })}
            </div>
        </div>
    );
}