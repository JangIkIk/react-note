import { configureStore } from "@reduxjs/toolkit";
import lineSliceReducer from "./lineSlice";

export const store = configureStore({
    reducer: {
        line: lineSliceReducer,
    },
})

export type AppDisPatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;