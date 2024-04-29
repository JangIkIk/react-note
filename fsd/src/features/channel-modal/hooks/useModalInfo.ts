import React, {useEffect, useState} from "react";
import {channelModalData} from "../model/data";


/*
    타입재설정 필요
*/

export const useModalInfo = ()=>{
    const [dataId, setDataId] = useState<string | null>(null)
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
            console.log("useEffect 실행")
        if(dataId){
            const filterData = channelModalData.filter( value => value.id === parseInt(dataId))
            setData(filterData);
        }

        return(()=>{
                // console.log(data)
                setData(null);
                console.log("useEffect Clean-up")
        }) 

    },[dataId])
    /*
        useEffect에 의존성 배열이 존재할때:
        초기 마운트에 한번 실행되고, 의존성배열이 업데이트 될때마다 실행된다.
        하지만 Clean-up함수는
    */

    return [data, setDataId];
}