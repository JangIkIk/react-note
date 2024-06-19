type SubscribeListData = {
  idx: number;
  name: string;
  description: string | null;
  profileImg: string | null;
  createdAt: Date;
};

export type SubscribeList = SubscribeListData[] | null;
export type GetSubscribeList = () => void;
export type UseSubscribeList = () => [SubscribeList];
