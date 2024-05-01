import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HomeSortState{
    sortBy: string;
}

const initialState: HomeSortState = {
    sortBy: "전체",
}

const HomeSortSlice = createSlice({
    name: "home-sort-slice",
    initialState,
    reducers:{
        changeSort: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        }
    }
});

export const {changeSort} = HomeSortSlice.actions;
export default HomeSortSlice.reducer;