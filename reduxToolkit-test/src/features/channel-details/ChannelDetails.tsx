import React from "react";
import "./channelDetails.css";
import { useGetChannelDetails } from "./hooks/useGetChannelDetails";
import { ChannelModal } from "@app/features/channel-details/ui/modal/ChannelModal";
import { ChannelTap } from "../channel-tap/ChannelTap";
import { TapContent } from "../channel-tap-content/TapContent";

export const ChannelDetails = (props: { id: number }) => {
  const [detailData] = useGetChannelDetails(props.id);
  /*
        Channel-Detials-modal-slice를 만들어서
        부모에서는 Selectr로 모달을 보여주고 , 자식에서는 dispatch를 이용하여
        모달 여부를 보여주면 될것같다. modal props는 데이터 자체를 내려주고 사용할 내용만 모달에서 그려주는걸로

    */

    /*
        현재 탭 부분에서 버튼또한 서버 요청으로 인한 데이터로 받아와야한다.
        버튼또한 채널마다 다틀리기때문,

    */

  return (
    <>
      <div className="channelDetails">
        <div
          className="channelDetails-banner"
          style={{ backgroundImage: `url(${detailData?.banner})` }}
        ></div>
        <div className="channelDetails-info">
          <div className="channelDetails-info-profile">
            <img
              className="channelDetails-info-profile__img"
              src={detailData?.channelImg}
              alt={detailData?.channelName}
            />
          </div>
          <div className="channelDetails-info-content">
            <h1 className="channelDetails-info-content__title">
              {detailData?.channelName}
            </h1>
            <p className="channelDetails-info-content__text">{`${detailData?.accountName} ‧ 구독자${detailData?.subscribe}명 ‧ 동영상${detailData?.videos}개`}</p>
            <ChannelModal data={detailData} />
            <button className="channelDetails-info-content__subscribe">
              구독
            </button>
          </div>
        </div>
      </div>
      <ChannelTap data={detailData?.channelTap} />
      <TapContent/>
    </>
  );
};
