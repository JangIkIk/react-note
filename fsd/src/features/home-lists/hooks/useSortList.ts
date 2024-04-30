import { useEffect,useState } from "react";
import { UseSortList } from "../types";

export const useSortList = ()=>{
    const [listData, setListData] = useState<UseSortList[]>([]);
    
    useEffect(()=>{
        fetch("")
        .then( res => {
            const homeListsData = [
                {
                    id: 1,
                    previewImg: "https://i.ytimg.com/vi/6N_T5Q9BHS4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVch6ibxo6ac4Sz1KQcIXXU6AMrA",
                    playTime: "2:58:55",
                    channelImg: "https://yt3.ggpht.com/RjzsGfRc5vBFcVgPKN7yi4vDZGSUKL7pWE__oaK4ekF8Hk6a4696mI_ewK0a5DLmXdy3a1yj=s68-c-k-c0x00ffffff-no-rj",
                    title: "[𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 감성 힙합의 끝판왕 릴러말즈 (Leellamarz) 띵곡모음🎧‍❤️",
                    channelName: "쩌리뮤직 ᴊᴜsᴛʟɪsᴛᴇɴᴛᴏᴛʜᴇᴍᴜsɪᴄ",
                    view: 230000,
                    creatDay: "2014-04-14 09:00:00",
                    category: "음악"
                },
                {
                    id: 2,
                    previewImg: "https://i.ytimg.com/vi/1jnXKWV5iTk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh55X4dmWx9YaZvuMgWOvX_zs_Eg",
                    playTime: "30:57",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_meFLGNhZPE1Ck6GGQ1kAH_hhIg7axs5a1Kd_HIJ8d0_w=s68-c-k-c0x00ffffff-no-rj",
                    title: "찐따가 사랑할 때 (수강생 : 빠니보틀, 곽튜브, 뷰티풀너드)",
                    channelName: "피식대학Psick Univ",
                    view: 1220000,
                    creatDay: "2014-04-14 09:00:00",
                    category: "유머"
                },
                {
                    id: 3,
                    previewImg: "https://i.ytimg.com/vi/21WEmGX1qQw/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLD8GTrfNKfeO277va2Du2rlUsu-7A",
                    playTime: "1:23:06",
                    channelImg: "https://yt3.ggpht.com/oVlCgz2iHUwZQaFryJhVAAtuAPnJXPGwjDnzMSQGUNd9VZ09fKbEJM_pR63tlXPrukFYzI292g=s68-c-k-c0x00ffffff-no-rj",
                    title: "[𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕] 감성부터 떼창까지 릴러말즈 노래 모음",
                    channelName: "에브리제이 EveryJ",
                    view: 4000000,
                    creatDay: "2014-04-14 09:00:00",
                    category: "음악"
                },
                {
                    id: 4,
                    previewImg: "https://i.ytimg.com/vi/-uKB4A1n8tE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB50womoTEzhGfbGXzFhpN_tpLnXw",
                    playTime: "8:44",
                    channelImg: "https://yt3.ggpht.com/ytc/AIdro_kF62QIMYdcw2S7ApJSulBJQHGA9EW1g6_mwKyRIcxPfbQ=s68-c-k-c0x00ffffff-no-rj",
                    title: "모든 관중들이 찐텐으로 소름 돋았던 레전드 명경기. 볼더링 1위, 리드 1위한 이도현 클라스",
                    channelName: "ClimbTourTV_클라임투어티비",
                    view: 45000,
                    creatDay: "2014-04-14 09:00:00",
                    category: "스포츠"
                },
            ]
            setListData(homeListsData)
        })
        .catch( error => console.log(error))
    },[])


    return listData;
}