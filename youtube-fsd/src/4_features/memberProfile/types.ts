type ProfileInfoData = {
    idx: number,
    name: string,
    description: string,
    profileImg: string,
    createdAt: string,
};

export type ProfileInfo = ProfileInfoData | null;


export type MemberProfileFetch = () => void;
export type UseMemberProfile = () => [ProfileInfo];