import React from "react";
import "./moreModal.css";
import { Icon } from "@app/components/icon/Icon";
import more from "@images/more.svg";
import light from "@images/light.svg";
import { useAppDispatch, useAppSelector } from "@app/state/store";
import { changeValue } from "@state/header-more-modal-slice";


/*
    수정필요(css)
*/

export const MoreModal = ()=>{
    const textData = ["YouTube의 내 데이터", "디자인: 기기 테마", "언어: 한국어", "제한 모드: 사용안함", "위치: 한국", "단축키", "설정", "고객센터", "의견 보내기"];
    const selector = useAppSelector( state => state.HeaderMoreModalSlice.value);
    const dispatch = useAppDispatch();
    const openModal = ()=> dispatch(changeValue());

    return(
        <div className="guest-more" onClick={openModal}>
            <Icon src={more} alt={"more"}/>
            { selector && 
            <div className="guest-more-modal">
                {textData && textData.map( (value, idx) => {
                    return (
                        <div key={idx} className="guest-more-modal__button">
                            <Icon src={light} alt={"light"}/>
                            <p className="guest-more-modal__button__name">{value}</p>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
}