import {channelDetailData} from "../hooks/useGetChannelDetails";

// 수정필요(type 선언)
export const checkChannelLoader:any = async (params: any) =>{
        try{
            const response = await fetch("");
            // const data = await response.json();
            const selectedData = channelDetailData.filter( value => value.id === +params);
            return selectedData[0].id;
        }catch(error){
            console.error(error);
        }
}