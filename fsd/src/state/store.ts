
import { configureStore } from "@reduxjs/toolkit";
import sortSliceReducer from "@features/home-sort-btn/model/slice"

export const store = configureStore({
    reducer: {
        sort: sortSliceReducer,
    },
})

export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;