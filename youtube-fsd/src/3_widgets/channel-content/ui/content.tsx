import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; 
import { _ } from "./contentStyle";
import { useGetContent } from "../api/useGetContent";

export const Content = ()=>{
    const {accountName} = useParams();
    const navigate = useNavigate();
    const contentData = useGetContent(accountName ?? null);
    const onClickNavigate = (link: string, idx:number)=> {navigate(link), setSelectTap(idx)};
    const [selectTap, setSelectTap] = useState(0);
    console.log("상부렌더링");
    
    return(
        <>
            {contentData 
            &&
            <_.content>
                <_.banner $img={contentData.banner}/>
                <_.info>
                    <_.profile>
                        <_.profile__img src={contentData.channelImg} alt={contentData.channelImg}/>
                    </_.profile>
                    <_.container>
                        <_.title>{contentData.channelName}</_.title>
                        <_.accountContent>{`${contentData.accountName} ‧ 구독자${contentData.subscribe} ‧ 동영상${contentData.videos}`}</_.accountContent>
                        <_.subscribe>구독</_.subscribe>
                    </_.container>
                </_.info>
                <_.tap>
                {contentData.channelTap.map((button, idx)=>{
                    return (
                        <_.tapItem key={idx} onClick={()=> onClickNavigate(button.link, idx)} $select={ selectTap === idx}>
                            <span>{button.title}</span>
                        </_.tapItem>
                    );
                })}
                </_.tap>
            </_.content> }
            <_.line></_.line>
        </>
    );
}