import type { CONNECTOR } from "@shared/consts/index";

export type Content = {
    idx: number;
    banner: string;
    channelImg: string;
    channelName: string;
    channelLink: string;
    channelCreate: string;
    channelTap: CONNECTOR[];
    accountName: string;
    country: string;
    subscribe: number;
    videos: number;
    totalView: number;
};