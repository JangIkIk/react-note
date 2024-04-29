import React from "react";

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, AppDisPatch} from "./store"
export const useAppDispatch = () => useDispatch<AppDisPatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;