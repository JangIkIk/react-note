import React, { useEffect, useState } from "react";
import type {ButtonsState, ButtonsFunciton} from "../types";
import {baseFetch} from "@shared/lib/baseFetch";


export const useGetCategory: ButtonsFunciton = ()=> {
    const [categoryList, setCategoryList] = useState<ButtonsState[]>([]);
    const [selectCategory, setSelectCategory] = useState<string>("");

    useEffect(()=>{
        const dataFetch = async()=>{
            try{

                // 임시주석
                // const successData = await baseFetch(`${urlPath}`);
                // setButtons(successData);

                // 임시데이터
                const ButtonsFetchData = [
                    {id:1,name:"전체",category: ""},
                    {id:2,name:"음악",category: "music"},
                    {id:3,name:"유머",category: "humor"},
                    {id:4,name:"스포츠",category: "sports"},
                ]
                setCategoryList(ButtonsFetchData);
            }
            catch(error){
                console.log("error:",error)
            }
        };
        dataFetch();
    },[])
   return [selectCategory, setSelectCategory, categoryList]
}

