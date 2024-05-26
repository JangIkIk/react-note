import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import type {ProfileInfo, UseMemberProfile, MemberProfileFetch} from "../types";
import {useFetch} from "@shared/lib";



export const useGetMemberProfile:UseMemberProfile =  () => {
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [profileInfo, setProfileInfo] = useState<ProfileInfo>(null);
    const [cookie] = useCookies();

    const getMemberProfileFetch:MemberProfileFetch = async ()=>{
        try{
            const response = await baseFetch("channel",{},cookie.accessToken);
            
            if(!response.ok){
                setErrorStatus(response.status);
                return;
            }
            const jsonData = await response.json();
            setProfileInfo(jsonData);
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getMemberProfileFetch();
        if(errorStatus === 401) console.log("인증실패");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])
    
    return [profileInfo];
}