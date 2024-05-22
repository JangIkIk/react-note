import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { DefaultLayout } from "./layout/defaultLayout";
import { HeaderLayout } from "./layout/headerLayout";

import { Home } from "@pages/home";
import { ChannelDetail } from "@pages/channelDetail/index";
import { Login } from "@pages/login";
import { SignUp } from "@pages/signUp";
import { Home as TapHome } from "@pages/channelDetail-home";
import { Videos as TapVideos } from "@pages/channelDetail-videos";
import { Shorts as TapShorts } from "@pages/channelDetail-shorts";
import { PlayList as TapPlayList } from "@pages/channelDetail-playlist";
import { Community as TapCommunity } from "@pages/channelDetail-community";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />} errorElement={null}>
        <Route index element={<Home />} />
        <Route path={"channel/:accountName"} element={<ChannelDetail />}>
          <Route index element={<TapHome />} />
          <Route path="videos" element={<TapVideos />} />
          <Route path="shorts" element={<TapShorts />} />
          <Route path="playlist" element={<TapPlayList />} />
          <Route path="community" element={<TapCommunity />} />
        </Route>
      </Route>
      <Route path={"/"} element={<HeaderLayout />} errorElement={null}>
        <Route path={"login"} element={<Login />} />
        <Route path={"signup"} element={<SignUp />} />
      </Route>    
    </>
  )
);
