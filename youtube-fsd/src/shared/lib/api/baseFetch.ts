export const baseFetch = async(urlPath: string)=>{
    try{
        const API_URL = `${urlPath}`;
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("");
        }
        const jsonData = await response.json();
        return jsonData;
    }
    catch(error){
        return error;
        // 여기서 모든에러를 처리?
    }
}