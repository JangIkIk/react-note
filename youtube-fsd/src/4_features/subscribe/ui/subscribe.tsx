import React, { useState } from "react";
import { _ } from "./subscribeStyle";
import type { SubscribeProps } from "../types";
import { useDeleteSubscribe } from "../api/useDeleteSubscribe";
import { usePostSubscribe } from "../api/usePostSubscribe";

export const Subscribe = (props: SubscribeProps)=>{
    const {subscribe, channelidx} = props;
    const [DeleteSubscribe] = useDeleteSubscribe();
    const [PostSubscribe] = usePostSubscribe();
    const [isSubscribe, setIsSubscribe] = useState<boolean>(subscribe);
    

    const onClickDeleteSubmit = () => DeleteSubscribe(channelidx, setIsSubscribe);
    const onClickPostSubmit = () => PostSubscribe(channelidx, setIsSubscribe) ;
    
    return(
        <>
            {isSubscribe 
            ? <_.subscribe onClick={onClickDeleteSubmit} $active={isSubscribe}>구독중</_.subscribe> 
            : <_.subscribe onClick={onClickPostSubmit} $active={isSubscribe}>구독하기</_.subscribe>
            }
            
            {/* {isSubscribe
            ?<_.subscribeText $active={isSubscribe}>구독 하였습니다.</_.subscribeText>
            :<_.subscribeText $active={isSubscribe}>구독을 취소 하였습니다.</_.subscribeText>
            } */}
            
            
        </>
        
    );
}