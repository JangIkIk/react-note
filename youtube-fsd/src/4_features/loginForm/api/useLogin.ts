import React from "react";
import { baseFetch } from "@shared/lib";


export const useLogin = async(userId: string , userPw: string)=>{

    try{
            // 임시주석
            // const response = await fetch("",{
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         userId,
            //         userPw
            //     })

            // })
            // if(!response.ok){
            //     throw new Error("");
            // }
            // const token = await response.json();
            return "userId"
          
        }
        catch(error){
            // 에러처리부분
            console.log(error);
        }
    }