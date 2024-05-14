import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { DefaultLayout } from "./layout/defaultLayout";
import { HeaderLayout } from "./layout/headerLayout";

import { Home } from "@pages/home";
import { Channel } from "@pages/channel";
import { Login } from "@pages/login";
import { Shorts } from "@pages/shorts";
import { Subscriptions } from "@pages/subscriptions";
import { MyPage } from "@pages/my";
import { Music } from "@pages/music";
import { TapContent } from "@pages/channel/ui/tap-content";
import { TapHome } from "@pages/tap-home";
import { TapVideo } from "@pages/tap-video";
import { TapShorts } from "@pages/tap-shorts";
import { TapPlayList } from "@pages/tap-playlist";
import { TapCommunity } from "@pages/tap-community";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout/>} errorElement={null}>
      <Route index element={<Home/>}/>
      <Route path="channel/:id" element={<Channel/>}>
        <Route path="" element={<TapContent/>}>
          <Route path="" element={<TapHome/>}/>
          <Route path="video" element={<TapVideo/>}/>
          <Route path="shorts" element={<TapShorts/>}/>
          <Route path="playlist" element={<TapPlayList/>}/>
          <Route path="community" element={<TapCommunity/>}/>
        </Route>
      </Route>
      <Route path="shorts" element={<Shorts/>}/>
      <Route path="subscriptions" element={<Subscriptions/>}/>
      <Route path="mypage" element={<MyPage/>}/>
      <Route path="music" element={<Music/>}/>
      <Route path="/login" element={<HeaderLayout/>} errorElement={null}>
        <Route index element={<Login/>}/>
      </Route>
    </Route>
  )
)
