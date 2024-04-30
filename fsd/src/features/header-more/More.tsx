import React, { useState } from "react";
import "./more.css";
import more from "@images/more.svg";

export const More = ()=>{
    const [modal, setModal] = useState<boolean>(false);

    return(
        <>
        <div className="headerMore"onClick={()=> setModal(!modal)}>
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