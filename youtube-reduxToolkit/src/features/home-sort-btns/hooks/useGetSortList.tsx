import React, { useEffect, useState } from "react";
import {homeListsData} from "@features/home-lists/hooks/useGetList";

export const categoryData = [...new Set(homeListsData.map( value => value.category))]

export const useGetSortList = ()=>{
    const [category, setCategory] = useState<string[]>([]);

    useEffect(()=>{
        fetch("")
        .then( res => {
            // res.json();
            setCategory(["전체", ...categoryData]);
        })
        .catch( error => console.log(error))
    },[])

    return category;
}