import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";


type ProfileData = {
    idx: number,
    name: string,
    description: string,
    profileImg: string,
    createdAt: string,
}
type UseMemberProfile = (url: string) => [ProfileData | null];
type ProfileFetch = () => {}

export const useMemberProfile:UseMemberProfile =  (url) => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [cookie] = useCookies(['accessToken']);

    const profileFetch = async()=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
		            "Authorization" : `Bearer ${cookie.accessToken}`
                }
            });
            if(!response.ok){
                setErrorStatus(response.status);
                return;
            }
            const jsonData = await response.json();
            setProfileData(jsonData);
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        profileFetch();
    },[])


    return [profileData];
}