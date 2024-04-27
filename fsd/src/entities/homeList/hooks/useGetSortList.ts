import { useEffect,useState } from "react";
import { useAppSelector } from "@app/hooks";
import { homeListData } from "../model/testData";

interface UseSortList {
    id: number;
    previewImg: string;
    playTime: string;
    channelImg: string;
    title: string;
    channelName: string;
    view: number;
    creatDay: string;
    category: string;
}

export const useSortList = ()=>{
    const sortData = useAppSelector( state => state.sort.sortBy);
    const [listData, setListData] = useState<UseSortList[]>([]);
    const [categoryBtnData , setCategoryBtnData] = useState<string[]>([]);
    

    useEffect(()=>{
        // 임시 테스트용
        if(sortData === "전체"){
            setListData(homeListData);
        }else{
            const testFilter = homeListData.filter( (data)=> data.category === sortData);
            setListData(testFilter)
        }
        
        const categories = [...new Set(homeListData.map(item => item.category))];
        setCategoryBtnData(categories);
    },[sortData])

    return {listData, categoryBtnData};
}