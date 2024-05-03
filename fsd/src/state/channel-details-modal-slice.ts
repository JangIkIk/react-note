import {createSlice} from "@reduxjs/toolkit"

interface ChannelDetailsModalState{
    value: boolean;
}

const initialState: ChannelDetailsModalState = {
    value: false,
}

const ChannelDetailsModalSlice = createSlice({
    name: "ChannelDetailsModalSlice",
    initialState,
    reducers: {
        changeValue: (state) => {
            state.value = !state.value;
        }
    }
})

export const {changeValue} = ChannelDetailsModalSlice.actions;
export default ChannelDetailsModalSlice.reducer;

