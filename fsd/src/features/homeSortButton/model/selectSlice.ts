import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SortState{
    sortBy: string;
}

const initialState: SortState = {
    sortBy: "전체",
}

const sortSlice = createSlice({
    name: "sortData",
    initialState,
    reducers:{
        changeSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        }
    }
});

export const {changeSortBy} = sortSlice.actions;
export default sortSlice.reducer

