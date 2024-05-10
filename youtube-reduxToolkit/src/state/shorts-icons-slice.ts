import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ShortsIconState {
    comment: boolean;
    more: boolean;
}

const initialState: ShortsIconState = {
    comment: false,
    more: false,
}

const ShortsIconsSlice = createSlice({
    name: "ShortsIconsSlice",
    initialState,
    reducers:{
        changeComment: (state) => {
            state.comment = !state.comment;
        },
        changeMore: (state)=>{
            state.more = !state.more;
        }
    }
})

export const {changeComment, changeMore} = ShortsIconsSlice.actions;
export default ShortsIconsSlice.reducer;