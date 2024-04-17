import React from "react";
import "../styles/rightpart.css";
import Guest from "./Guest";
import Member from "./Member";
import useCheckUser from "@hooks/useCheckUser";

const RightPart = ()=>{
    const authorization = useCheckUser();
    return(
        <div className="rightpart">
            {authorization ? <Member/> :<Guest/>}
        </div>
    );
}

export default RightPart;