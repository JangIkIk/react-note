import { createSlice } from "@reduxjs/toolkit";

interface HeaderMoreModalState {
    value: boolean;
}

const initialState: HeaderMoreModalState = {
    value: false,
}

const HeaderMoreModalSlice = createSlice({
    name: "HeaderMoreModalSlice",
    initialState,
    reducers:{
        changeValue: (state) => {
            state.value = !state.value;
        }
    }
})

export const {changeValue} = HeaderMoreModalSlice.actions;
export default HeaderMoreModalSlice.reducer;