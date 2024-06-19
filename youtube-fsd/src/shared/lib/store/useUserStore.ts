import { subscribe } from "diagnostics_channel";
import { create } from "zustand";

type Member = {
    idx: number,
    name: string,
    description: string | null,
    profileImg: string | null,
    createdAt: Date,
}

type State = {
    mode: string,
    member: Member | null,
    subscribe: boolean,
}

type Actions = {
    updateMode: (style: string) => void;

    isSubscribe: ()=> void;

    setMember: (memberInfo: Member) => void;
    removeMember: () => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    mode: "dark",
    
    subscribe: false,
    isSubscribe: () => set((state)=> ({subscribe: !state.subscribe})),
    updateMode: (style)=> set({mode: style}),

    member: null,
    removeMember: () => set({member: null}),
    setMember: (memberInfo) => set({member: memberInfo}),
}))
