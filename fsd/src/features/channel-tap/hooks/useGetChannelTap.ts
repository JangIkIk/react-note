import React, { useEffect, useState } from "react";

const testData = ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"];
export const useGetChannelTap = ()=>{
    const [data, setData] = useState<string[]>([]);

    useEffect( ()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("");
                if(!response.ok){
                    throw new Error("Failed to fetch data");
                }
                // const data = await response.json();
                setData(testData);
            }
            catch(error){
                console.error("what Error?", error);
            }
        }
        fetchData();
    },[]);

    return data;
}