import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HomeSortState{
    value: string;
}

const initialState: HomeSortState = {
    value: "전체",
}

const HomeSortSlice = createSlice({
    name: "HomeSortSlice",
    initialState,
    reducers:{
        changeValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const {changeValue} = HomeSortSlice.actions;
export default HomeSortSlice.reducer;