import React from "react";
import "./channelModal.css";
import { useAppDispatch, useAppSelector } from "@app/state/store";
import { changeValue } from "@state/channel-details-modal-slice";
import { ChannelDetails } from "../../tpyes";



export const ChannelModal = (props: {data: ChannelDetails})=>{
    const { data: { channelLink, subscribe, videos, totalView, channelCreate, country } = {} } = props;
    const select = useAppSelector( state => state.ChannelDetailsModalSlice.value);
    const dispatch = useAppDispatch();
    const onClickOpenModal = () => dispatch(changeValue());

    return(
        <>
            <div className="channelModal" onClick={onClickOpenModal}>
                <span>채널 자세히 알아보기</span>
                <span>더보기</span>
            </div>
            {select ? <div className="channelModal-open" onClick={onClickOpenModal}>
                <div className="channelModal-open__container">
                    <h3>채널 세부정보</h3>
                    <p>{channelLink}</p>
                    <p>{subscribe}</p>
                    <p>{videos}</p>
                    <p>{totalView}</p>
                    <p>{channelCreate}</p>
                    <p>{country}</p>
                </div>
            </div> : ""}
        </>
    );
}