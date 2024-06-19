type Channel = {
    idx: number,
    name: string,
    description: string | null,
    profileImg: string | null,
    createdAt: string
};

type Subscribe = boolean;

type ChannelDetailData = {
    channel: Channel,
    subscribe: Subscribe,
}

export type ChannelDetailInfo = ChannelDetailData | null;
