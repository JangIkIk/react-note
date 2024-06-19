import React, {useState } from "react";
import type { Options, ReturnArray } from "../types";

export const useFetch = <T>(): ReturnArray<T> => {
  const [errorStatus, setErrorStatus] = useState<number>(0);
  const [fetchData, setFetchData] = useState<T | null>(null);

  const baseFetch = async (
    url: string,
    options?: Options<T>,
    auth?: string
  ) => {
    try {
      const {
        method = "GET",
        headers = "application/json",
        data,
      } = options || {};
      const editHeaders: HeadersInit = {
        ...(headers ? { "Content-Type": headers } : {}),
        ...(auth && { Authorization: `Bearer ${auth}` }),
      };
      const requestInfo: RequestInit = {
        method,
        headers: { ...editHeaders },
        ...(data && {
          body: data instanceof FormData ? data : JSON.stringify(data),
        }),
      };

      const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
        ...requestInfo,
      });
      if(!response.ok){
        setErrorStatus(response.status);
        return;
      }

      const jsonData:T = await response.json();
      setFetchData(jsonData);

      return response;
    } catch (error) { 
        if(error instanceof Error) return error;
    }
  };
  return [baseFetch, fetchData, errorStatus];
};
// export const useFetch = <T> (): ReturnArray<T>=>{

//     const baseFetch = async(url: string, options?: Options<T>, auth?: string)=>{
//             const {method = "GET", headers = "application/json", data} = options || {};
//             const editHeaders: HeadersInit = {
//                 ...(headers ? {"Content-Type": headers} : {}),
//                 ...(auth && {"Authorization": `Bearer ${auth}`}),
//             };
//             const requestInfo: RequestInit = {
//                 method,
//                 headers:{...editHeaders},
//                 ...(data && { body: (data instanceof FormData) ? data : JSON.stringify(data) })
//             };

//             const response = fetch(`${process.env.REACT_APP_API_URL}/${url}`,{...requestInfo});
//             return response;
//     };
//     return [baseFetch];
// }

// 기존
// export const useFetch = <T> (): ReturnArray<T>=>{
//     const [fetchData, setFetchData] = useState<T | null>(null);
//     const [errorStatus, setErrorStatus] = useState<number | null>(null);

//     const baseFetch = async(url: string, options?: Options<T>, auth?: string)=>{
//         try{
//             const {method = "GET", headers = "application/json", data} = options || {};
//             const editHeaders: HeadersInit = {
//                 "Content-Type": headers, // or "application/formdata"
//                 ...(auth && {"Authorization": `Bearer ${auth}`}),
//             };
//             const requestInfo: RequestInit = {
//                 method,
//                 headers:{...editHeaders},
//                 ...(data && {body: JSON.stringify(data)}),
//             };

//             const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`,{...requestInfo});

//             if(!response.ok) {
//                 // setErrorStatus(response.status)
//                 return response.status;
//             };
//             // body에 데이터가 없을경우에는 201로 준다고 했음
//             // 하지만 toke 자체가 body로 오는데 이같은 경우는 ?
//             // 데이터가 있을경우에는 200
//             // 로그인은 200으로 시도해야하고, 회원가입은 201로 시도해야하는 상황
//             // 데이터가 있는데도 불구하고 로그인시에 201로 상태코드가 넘어옴
//             if(response.status === 201){
//                 const jsonData = await response.json(); //
//                 setFetchData(jsonData);
//                 // return jsonData;
//             };

//             // return status가 필요한가?
//             return response.status;
//         }
//         catch(error){
//             if(error instanceof Error) console.log(error);
//             // return error
//         }
//     };
//     return [baseFetch, errorStatus, fetchData];
// }
