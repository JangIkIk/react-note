import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import type {ProfileInfo, UseMemberProfile, MemberProfileFetch} from "../types";
import {useFetch} from "@shared/lib";
import {useUserStore} from "@shared/lib";
import {useShallow} from "zustand/react/shallow";

export const useGetMemberProfile:UseMemberProfile = () => {
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [profileInfo, setProfileInfo] = useState<ProfileInfo>(null);
    const [cookie] = useCookies();
    const setMember = useUserStore( state => state.setMember);
    // useShallow는 다시 렌더링을 방지한다, useEffect에도 적용됨
    const member = useUserStore(useShallow(staet => staet.member));
    // console.log("렌더링방지")
    const getMemberProfileFetch:MemberProfileFetch = async ()=>{
        try{
            // const response = await baseFetch("channel",{},cookie.accessToken);
            
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            // const jsonData = await response.json();
            // setProfileInfo(jsonData);
            // setMember(jsonData)
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getMemberProfileFetch();
        if(errorStatus === 401) console.log("인증실패");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus,member])
    
    return [profileInfo];
}