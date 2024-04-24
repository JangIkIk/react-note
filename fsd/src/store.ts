import { configureStore } from "@reduxjs/toolkit";
import lineSliceReducer from "./lineSlice";
import sortSliceReducer from "@features/homeSortButton/model/selectSlice"

export const store = configureStore({
    reducer: {
        line: lineSliceReducer,
        sort: sortSliceReducer,
    },
})

export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;