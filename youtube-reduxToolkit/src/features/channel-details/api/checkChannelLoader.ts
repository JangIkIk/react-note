import {channelDetailData} from "../hooks/useGetChannelDetails";


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