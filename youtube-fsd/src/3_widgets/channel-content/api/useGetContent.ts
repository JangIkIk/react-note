import React, { useEffect, useState } from "react";
import type {Content} from "../types";
import { navigateMapper } from "@shared/lib/index";
import { CONNECTOR_CHANNEL_TAP_MENU } from "@shared/consts";


export const useGetContent = (accountName: string | null)=>{
    const [content, setContent] = useState<Content | null>(null);

    useEffect(()=>{
        const dataFetch = async()=>{
            try{
                //  백엔드 통신은 baseFetch를 사용하여 처리
               const contentData = [
                    {
                        idx: 1,
                        banner: "https://yt3.googleusercontent.com/YNY6T9P5VCQ-eYAtbfs-oOm-8JNMEjt73OgVZG3hj11txmbXp0aqz0e0bbLesHJ4nLyCdVSHnw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                        channelImg: "https://yt3.ggpht.com/RjzsGfRc5vBFcVgPKN7yi4vDZGSUKL7pWE__oaK4ekF8Hk6a4696mI_ewK0a5DLmXdy3a1yj=s68-c-k-c0x00ffffff-no-rj",
                        channelName: "쩌리뮤직 ᴊᴜsᴛʟɪsᴛᴇɴᴛᴏᴛʜᴇᴍᴜsɪᴄ",
                        channelLink: "https://www.youtube.com/@sss-lx5un",
                        channelCreate: "2021-04-12",
                        channelTap: ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"],
                        accountName: "@sss-lx5un",
                        country: "대한민국",
                        subscribe: 24000,
                        videos: 176,
                        totalView: 103918898,
                    },
                    {
                        idx: 2,
                        banner: "https://yt3.googleusercontent.com/axVIHAKIyKFEi56OxDHTsPq1Qqq40jyx-1JJvoarvQI1U9hVUf-IJHqeY_qPfL9ZXJMSep8r=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                        channelImg: "https://yt3.ggpht.com/ytc/AIdro_meFLGNhZPE1Ck6GGQ1kAH_hhIg7axs5a1Kd_HIJ8d0_w=s68-c-k-c0x00ffffff-no-rj",
                        channelName: "피식대학Psick Univ",
                        channelLink: "https://www.youtube.com/@PsickUniv",
                        channelCreate: "2019-04-01",
                        channelTap: ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"],
                        accountName: "@PsickUniv",
                        country: "대한민국",
                        subscribe: 31000000,
                        totalView: 19000000,
                        videos: 14000,
                    },
                    {
                        idx: 3,
                        banner: "https://yt3.googleusercontent.com/CRKUxCrp7JzjwUSwiWoH4H7ufpPwqFia8G99-Zz2Af2SENbt1QIj_WIbZJxL8COhqvOthTPF=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                        channelImg: "https://yt3.ggpht.com/oVlCgz2iHUwZQaFryJhVAAtuAPnJXPGwjDnzMSQGUNd9VZ09fKbEJM_pR63tlXPrukFYzI292g=s68-c-k-c0x00ffffff-no-rj",
                        channelName: "에브리제이 EveryJ",
                        channelLink: "https://www.youtube.com/@everyj",
                        channelCreate: "2014-7-23",
                        channelTap: ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"],
                        accountName: "@everyj",
                        country: "대한민국",
                        subscribe: 15100,
                        totalView: 6000000,
                        videos: 68,
                    },
                    {
                        idx: 4,
                        banner: "https://yt3.googleusercontent.com/-RHaTgGjkIK7ISoRSxf2VgvtjZVA84_8rdjgrmZSUjLxLBpbQ835zapT7fWky7HWAUGlQe5Udw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                        channelImg: "https://yt3.ggpht.com/ytc/AIdro_kF62QIMYdcw2S7ApJSulBJQHGA9EW1g6_mwKyRIcxPfbQ=s68-c-k-c0x00ffffff-no-rj",
                        channelName: "ClimbTourTV_클라임투어티비",
                        channelLink: "https://www.youtube.com/@ClimbTourTV",
                        channelCreate: "2018-11-27",
                        channelTap: ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"],
                        accountName: "@ClimbTourTV",
                        country: "대한민국",
                        subscribe: 94900,
                        totalView: 7000000,
                        videos: 277,
                    },
                ]
                const filterData = contentData.filter( value => value.accountName === accountName);
                const mapper = navigateMapper(filterData[0].channelTap,CONNECTOR_CHANNEL_TAP_MENU);
                setContent({...filterData[0], channelTap: mapper});
            }
            catch(error){
                console.log(error);
            }
        }

        dataFetch();
    },[])

    return content;
}