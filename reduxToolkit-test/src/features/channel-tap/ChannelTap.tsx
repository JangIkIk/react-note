import React from "react";
import "./channelTap.css";
import { useAppSelector, useAppDispatch } from "@app/state/store";
import { changeValue } from "@state/channel-tap-slice";


export const ChannelTap = (props:{ data : string[]})=>{
    const buttons = props.data;
    const select = useAppSelector( state => state.ChannelTapSlice.value);
    const dispatch = useAppDispatch();
    const onClickTapNum = (idx: number) => dispatch(changeValue(idx));

    return(
        <div className="channel-tap">
            <div className="channel-tap-buttons">
                {buttons && buttons.map((value, idx) => {
                    return(
                        <div className="channel-tap-name" key={idx} onClick={()=>onClickTapNum(idx)}>
                            <p className="channel-tap-name__button" style={{color: select === idx ? "var(--default-text-color)" : ""}}>{value}</p>
                            {select === idx ? <div className="channel-tap-name__line"></div> : ""}
                        </div>
                    );
                })}
                <div className="channel-tap-name">
                    <p className="channel-tap-name__button">아이콘</p>
                </div>
            </div>
            <div className="channel-tap-line"></div>
        </div>
    );
}