
/*
    수정필요(확인)
    서버에서의 프로퍼티명이 틀리고, 타입도 명확하지 않다면 어떻게 
    미리 처리할수 있을까 ?
*/
export interface ChannelDetails {
    id: number;
    banner: string;
    channelImg: string;
    channelName: string;
    accountName: string;
    subscribe: number;
    videos: number;
    channelLink: string;
    totalView: number;
    channelCreate: string;
    country: string;
    channelTap: string[];
}