import React from "react";
import "./home.css";
import {useDebug} from "@app/shared/hooks/useDebugStyle";
import {useSortData} from "@features/homeSortButton/index";
import {ListContainer} from "@widget/listContainer/index";
import {HomeSortButton} from "@features/homeSortButton/index";

export const Home = ()=>{
    const {debugStyle} = useDebug("pages/Home");
    const listData = useSortData();
    
    
    return(
        <div className="home" {...debugStyle}>
            <div className="home-sort">
                {/* 해당부문은 사실상 서버에서 버튼 메뉴를 받아야함
                    임시처리방식 고민
                */}
                <HomeSortButton>전체</HomeSortButton>
                <HomeSortButton>음악</HomeSortButton>
                <HomeSortButton>만화</HomeSortButton>
            </div>
            { listData && <ListContainer data={listData}/>}
        </div>
    );
}