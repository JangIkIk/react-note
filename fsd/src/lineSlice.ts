import {createSlice} from "@reduxjs/toolkit";

interface LineState{
    value: boolean;
}

const initialState: LineState = {
    value: false,
}

const lineSlice = createSlice({
    name: "line",
    initialState,
    reducers:{
        isLine(state){
            state.value = !state.value;
        }
    }
});

export const {isLine} = lineSlice.actions;
export default lineSlice.reducer

