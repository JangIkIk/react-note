
import { configureStore } from "@reduxjs/toolkit";
import HomeSortSlice from "./home-sort-slice";
import HeaderMenuModalSlice from "./headerMenuModal-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        HomeSortSlice: HomeSortSlice,
        HeaderMenuModalSlice: HeaderMenuModalSlice,
    },
})

type AppDisPatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDisPatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;