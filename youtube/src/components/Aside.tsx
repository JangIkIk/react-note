import React from "react";
import "@css/aside.css";
import AsideButton from "./AsideButton.tsx";


function Aside(){
    const buttonData = [
        {
            iconType: "home",
            iconText: "홈",
            router: ""
        },
        {
            iconType: "fast_forward",
            iconText: "Shorts",
            router: ""
        },
        {
            iconType: "subscriptions",
            iconText: "구독",
            router: ""
        },
        {
            iconType: "video_library",
            iconText: "나",
            router: ""
        },
    ];

    return(
        <div className="aside">
            {buttonData && buttonData.map((value, idx)=> <div className="aside_item"><AsideButton key={idx} buttonInfo={value}/></div>)}
        </div>
    );
};

export default Aside;