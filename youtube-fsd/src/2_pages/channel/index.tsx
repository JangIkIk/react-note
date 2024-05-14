// package
import React from "react";
import { useParams } from "react-router-dom";

// slice
import { Style } from "./styles/channel";


// layers
import { Tap } from "./ui/tap";


export const Channel = () => {
  const { id } = useParams();
  // const [data] = useGetDetailsAtom(id ? id : null);

  // console.log(data);

  return (
    <>
      {/* <Style.channel>
        <Style.banner $img={data?.banner} />
        <Style.info>
          <Style.profile>
            <Style.profile__img
              src={data?.channelImg}
              alt={data?.channelName}
            />
          </Style.profile>
          <Style.container>
            <Style.title>{data?.channelName}</Style.title>
            <Style.content>{`${data?.accountName} ‧ 구독자${data?.subscribe}명 ‧ 동영상${data?.videos}개`}</Style.content>
            <Style.subscribe>구독</Style.subscribe>
          </Style.container>
        </Style.info>
      </Style.channel>
      <Tap/> */}
    </>
  );
};
