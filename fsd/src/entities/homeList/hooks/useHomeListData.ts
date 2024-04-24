import { useEffect, useState } from "react";

export interface listDataType {
    id: number;
    previewImg: string;
    playTime: string;
    channelImg: string;
    channelName: string;
    title: string;
    view: number;
    creatDay: string;
}

export const useHomeListData = ()=>{
    const [listData, setListData] = useState<listDataType[]>([]);

    const fetchData = async () => {
        try {

            const testData = [
                {
                    id: 1,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 2,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 3,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 4,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 5,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 6,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
                {
                    id: 7,
                    previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                    playTime: "1:58",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                    title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                    channelName: "계정명",
                    view: 70000,
                    creatDay: "2014-04-14 09:00:00"
                },
        
            ]
            setListData(testData);
        } catch{
            console.log("에러");
        }
    };

    useEffect(()=>{
        fetchData();
    },[])

    return listData;
}