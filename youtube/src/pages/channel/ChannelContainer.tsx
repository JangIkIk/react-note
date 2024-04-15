import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ChannelView from "./ChannelView.tsx";

export interface ChannelData {
  id?: number;
  banner?: string;
  profile?: string;
  name?: string;
  account?: string;
  subscriber?: number;
  video?: number;
}

function Channel(props: {children: React.ReactNode}) {
  const [channelData, setChannelData] = useState<ChannelData>({});
  const {children} = props;
  const {id} = useParams();

  useEffect(() => {
    fetch("")
      .then((res) => {
        const ChannelData = [
          {
            id: 1,
            banner:
              "https://yt3.googleusercontent.com/B4kvgPJQrx99ZN9ZpZ6F1YwB6NkCDCrcW-77kdbLIhWlVuUOCCMAuN6K4hMvhSChKmL6vW08=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/ytc/AIdro_kYEzUdeE0T5Y5NXkGyWEXbmpMQKpWeMNvtOqVsHHIhp-A=s176-c-k-c0x00ffffff-no-rj",
            name: "재즈기자 Jazz Editor",
            account: "@jazzeditor",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 2,
            banner:
              "https://yt3.googleusercontent.com/ZL2x_ROev7X5OQD7moztVKKBr13VOYVEQqZnAXPCY1hS0aowB-rvzZJbEDl_gCKTsUCmMYCE5Q=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/J8EZuwS47_PgW74YoicdBgbfp5XcWa5VClobxkM7Hr3eWNkxEjGMOBqTpDyKiYQGvpnGO_c1=s176-c-k-c0x00ffffff-no-rj",
            name: "리스펙 뮤직 『Respect Music』",
            account: "@respectmusic6917",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 3,
            banner:
              "https://yt3.googleusercontent.com/xbZuYQfviyhDapPj7WruxdlOCwT25PNK2aN-m8ZaLpz8tqIsqD26rlLhgg29hDgij-CIyH0u=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/hIyipgDB-zeYDTuqvTgr8bn7Juf_y3qUPCGjZt_dCX9ND7JejeFHZWBpUITgpNlRxcLlgZkZoA=s176-c-k-c0x00ffffff-no-rj",
            name: "힙재 HIPJAE 🎵",
            account: "@hipjae727",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 4,
            banner:
              "https://yt3.googleusercontent.com/CRKUxCrp7JzjwUSwiWoH4H7ufpPwqFia8G99-Zz2Af2SENbt1QIj_WIbZJxL8COhqvOthTPF=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/oVlCgz2iHUwZQaFryJhVAAtuAPnJXPGwjDnzMSQGUNd9VZ09fKbEJM_pR63tlXPrukFYzI292g=s176-c-k-c0x00ffffff-no-rj",
            name: "에브리제이 EveryJ",
            account: "@everyj",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 5,
            banner:
              "https://yt3.googleusercontent.com/gn9LAepxrrIuPuAKMEO4bE1oaGhk2igqvyMqSFmv05dtoUsCFO3tDC6OWWaH-rWnQflWXQ9E=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/eeO7_kj214ELzublhbUvImCcYJETn9xFquTTKI40G832A0deDvKz5h26UuRxbn41e7E9DUU23Q=s176-c-k-c0x00ffffff-no-rj",
            name: "디글 :Diggle",
            account: "@Diggle",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 5,
            banner:
              "https://yt3.googleusercontent.com/gn9LAepxrrIuPuAKMEO4bE1oaGhk2igqvyMqSFmv05dtoUsCFO3tDC6OWWaH-rWnQflWXQ9E=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/eeO7_kj214ELzublhbUvImCcYJETn9xFquTTKI40G832A0deDvKz5h26UuRxbn41e7E9DUU23Q=s176-c-k-c0x00ffffff-no-rj",
            name: "디글 :Diggle",
            account: "@Diggle",
            subscriber: 2500,
            video: 166,
          },
          {
            id: 6,
            banner:
              "https://yt3.googleusercontent.com/iAQC_osn73u92w8po10uT6A_Sb-klgF3I-DidbPUGupqwGnPP9PHFnzZRU56fa1ge4PBNrwNZw=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            profile:
              "https://yt3.googleusercontent.com/npzBqOo0vw82eI1j631NECvSlTMGdehPG4dsxeiy2Pw3QYeLw_Me3YbVJ7hlxkCBl_08LQ5B=s176-c-k-c0x00ffffff-no-rj",
            name: "Dj 6ix9ine",
            account: "@dj6ix9ine84",
            subscriber: 2500,
            video: 166,
          },
        ]

        const filterData = {...ChannelData.filter( value => id && value.id === +id)}[0]
        setChannelData(filterData);
        return;
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ChannelView channelData={channelData}>
        {children}
      </ChannelView>
    </>
  );
}

export default Channel;
