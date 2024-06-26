
import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import AsideMenuDetailsSlice from "./aside-menu-details-slice";
import HeaderMoreModalSlice from "./header-more-modal-slice";
import HomeSortSlice from "./home-sort-slice";
import ChannelTapSlice from "./channel-tap-slice";
import ChannelDetailsModalSlice from "./channel-details-modal-slice";
import ShortsIconsSlice from "./shorts-icons-slice";

export const store = configureStore({
    reducer: {
        HomeSortSlice: HomeSortSlice,
        AsideMenuDetailsSlice: AsideMenuDetailsSlice,
        HeaderMoreModalSlice: HeaderMoreModalSlice,
        ChannelTapSlice: ChannelTapSlice,
        ChannelDetailsModalSlice: ChannelDetailsModalSlice,
        ShortsIconsSlice: ShortsIconsSlice,
    },
})

type AppDisPatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDisPatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;