import React, { useState } from "react";
import "./headerMore.css";
import more from "@image/more.svg";
import {useDebug} from "@app/shared/hooks/useDebugStyle";

export const HeaderMore = ()=>{
    const [modal, setModal] = useState<boolean>(false);
    const {debugStyle} = useDebug("features/headerMore")

    return(
        <>
        <div className="headerMore" {...debugStyle} onClick={()=> setModal(!modal)}>
            <img className="headerMore__img" src={more} alt="more"/>
        </div>
        {modal 
        ? <div className="headerMore__modal">
            <p>모달창 내용</p>
        </div> 
        : null}
        </>
        
    );
}