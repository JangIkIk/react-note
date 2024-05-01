import {createSlice} from "@reduxjs/toolkit"

interface AsideMenuDetailsState{
    value: boolean;
}

const initialState: AsideMenuDetailsState = {
    value: false,
}

const AsideMenuDetailsSlice = createSlice({
    name: "AsideMenuDetailsSlice",
    initialState,
    reducers:{
        changeValue: (state) => {
            state.value = !state.value;
        }
    }
})

export const {changeValue} = AsideMenuDetailsSlice.actions;
export default AsideMenuDetailsSlice.reducer;