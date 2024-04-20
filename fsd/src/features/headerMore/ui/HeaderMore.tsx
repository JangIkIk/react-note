import React, { useState } from "react";
import "./headerMore.css";
import more from "@image/more.svg";
import {useAppSelector} from "@app/hooks";

export const HeaderMore = ()=>{
    const lineValue = useAppSelector( state => state.line.value);
    const [modal, setModal] = useState<boolean>(false);

    return(
        <>
        <div className={`headerMore ${lineValue ? "headerMore-line" : ""}`} onClick={()=> setModal(!modal)}>
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