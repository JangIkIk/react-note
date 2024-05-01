import React from "react";
import "./asideCategory.css";
import {memberData,guestData} from "../../model/data";
import {checkUser} from "@utility/checkUser";
import { Icon } from "@app/components/icon/Icon";

export const AsideCategory = ()=> {
    const isUser = checkUser();
    return (
        <div className="aside-category">
            {isUser 
            ? memberData.map((value, idx) => {
                return(
                    <div key={idx} className="aside-category__button">
                        <Icon src={value.src} alt={value.name}></Icon>
                        <p className="aside-category__button__name">{value.name}</p>
                    </div>
                )
            })
             : guestData.map((value, idx) => {
                return(
                    <div key={idx} className="aside-category__button">
                        <Icon src={value.src} alt={value.name}></Icon>
                        <p className="aside-category__button__name">{value.name}</p>
                    </div>
                )
            })}
        </div>
    );
}