import React,{useState, useEffect} from "react";
import AsideView from "./AsideView.tsx";

export interface MenuData{
    iconType: string;
    iconText: string;
    router: string;
}

function AsideContainer(){
    const [menuData, setMenuData] = useState<MenuData[]>([]);

    useEffect(()=>{
        fetch("")
        .then( res => {
            const buttonData = [
                {
                    iconType: "home",
                    iconText: "홈",
                    router: "/"
                },
                {
                    iconType: "fast_forward",
                    iconText: "Shorts",
                    router: "shorts"
                },
                {
                    iconType: "subscriptions",
                    iconText: "구독",
                    router: "subscriptions"
                },
                {
                    iconType: "play_circle",
                    iconText: "음악",
                    router: "music"
                },
                {
                    iconType: "video_library",
                    iconText: "나",
                    router: "my"
                },
            ];
            setMenuData(buttonData);
        })
        .catch( error => console.log(error))
    },[])

    return(
        <div className="aside">
            <AsideView menuData={menuData}/>
        </div>
    );
};

export default AsideContainer;