import { create } from "zustand";


type State = {
    user: null | string,
    mode: string,
}

type Actions = {
    updateUser: (userid: string) => void;
    deleteUser: () => void;
    updateMode: (style: string) => void;
}

export const useUserStore = create<State & Actions>((set) => ({
    user: null,
    mode: "dark",

    updateUser: (userId) => set({user: userId}),
    deleteUser: () => set({user: null}),
    updateMode: (style) => set({mode: style}),
}))
