// package
import React from "react";
import styled from "styled-components";

// slice
import { listsData } from "../../model/listsData";
// import { useGetListAtom } from "../../hooks/useGetListAtom";

// layers
import { VideoList } from "@shared/ui/videoList";

export const Lists = ()=>{
    // const list = useGetListAtom();
    
    return(
        <></>
        // <Style_lists>
        //     {list && list.map( (value) => {
        //         return(
        //             <Style_lists__item key={value.id}>
        //                 <VideoList data={value}/>
        //             </Style_lists__item>
        //         );
        //     })}
        // </Style_lists>
    );
}

const Style_lists = styled.div`
    display: flex;
    padding-top: 20px;
    gap: 15px;
    margin: 0 10px 0 10px;
    flex-wrap: wrap;
`;

const Style_lists__item = styled.div`
    flex: 1 0 260px;
    margin-bottom: 15px;
`;
