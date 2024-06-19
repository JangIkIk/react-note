import React from "react";
import { _ } from "./contentStyle";
import { useGetChannelDetail } from "../api/useGetChannelDetail";
import { Subscribe } from "@features/subscribe";
import { useUserStore } from "@shared/lib";

export const Content = ()=>{
    const [channelDetailInfo] = useGetChannelDetail();
    const member = useUserStore( state => state.member);

    return(
        <>
            {channelDetailInfo 
            &&
            <_.content>
                <_.banner $img={`${process.env.REACT_APP_API_URL}/${channelDetailInfo.channel.profileImg}`}/>
                <_.info>
                    <_.profile>
                        <_.profile__img src={`${process.env.REACT_APP_API_URL}/${channelDetailInfo.channel.profileImg}`} alt={`${channelDetailInfo.channel.profileImg}`}/>
                    </_.profile>
                    <_.container>
                        <_.title>{channelDetailInfo.channel.name}</_.title>
                        <_.accountContent>{`${channelDetailInfo.channel.createdAt}`}</_.accountContent>
                        {member?.idx !== channelDetailInfo.channel.idx
                        ?<Subscribe subscribe={channelDetailInfo.subscribe} channelidx={channelDetailInfo.channel.idx}/>
                        : null }
                    </_.container>
                </_.info>
                {/* <_.tap>
                {contentData.channelTap.map((button, idx)=>{
                    return (
                        <_.tapItem key={idx} onClick={()=> onClickNavigate(button.link, idx)} $select={ selectTap === idx}>
                            <span>{button.title}</span>
                        </_.tapItem>
                    );
                })}
                </_.tap> */}
            </_.content> }
            <_.line></_.line>
        </>
    );
}