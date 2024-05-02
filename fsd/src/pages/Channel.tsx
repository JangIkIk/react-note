import React from "react";
import {ChannelDetails} from "@features/channel-details/ChannelDetails";
import { ChannelTap } from "@app/features/channel-tap/ChannelTap";
import { useLoaderData } from "react-router-dom";



export const Channel = ()=>{
    const id = useLoaderData() as number;
    /*
        react-router-dom의 loader, useLoaderData()를 사용하면
        특정 컴포넌트에서 종속되지 않고, 상위 AppRouter.tsx파일에서 에러를 쉽게 처리 해줄수가 있다.
        동적라우팅이라도, loader를 통해 fetch통신을 하고, 상태코드에 따라 에러페이지를 보여줄수있고, 정상적인 통신이라면
        해당 데이터로 화면을 그려주면 된다.
    */
    return(
        <>
            <ChannelDetails id={id}/>
            <ChannelTap id={id}/>
        </>
        
    );
}