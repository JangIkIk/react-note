
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChannelTapState{
    value: number;
}

const initialState: ChannelTapState = {
    value: 0,
}

const ChannelTapSlice = createSlice({
    name: "ChannelTapSlice",
    initialState,
    reducers:{
        changeValue: (state, actions)=>{
            state.value = actions.payload;
        }
    }
});

export const {changeValue} = ChannelTapSlice.actions;
export default ChannelTapSlice.reducer;
