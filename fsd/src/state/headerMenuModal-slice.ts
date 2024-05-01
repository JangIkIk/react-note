import {createSlice} from "@reduxjs/toolkit"

interface HeaderMenuModalState{
    value: boolean;
}

const initialState: HeaderMenuModalState = {
    value: false,
}

const HeaderMenuModalSlice = createSlice({
    name: "headerMenuModal-slice",
    initialState,
    reducers:{
        changeValue: (state) => {
            state.value = !state.value;
        }
    }
})

export const {changeValue} = HeaderMenuModalSlice.actions;
export default HeaderMenuModalSlice.reducer;