import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Link } from "react-router-dom";

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
import { route } from "@shared/consts/index";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout/>} errorElement={null}>
      <Route path={`${route.HOME}`} element={<Home/>}/>
      <Route path={`${route.CHANNEL}/:id`} element={<Channel/>}>
        <Route element={<TapContent/>}>
          <Route path="" element={<TapHome/>}/>
          <Route path="video" element={<TapVideo/>}/>
          <Route path="shorts" element={<TapShorts/>}/>
          <Route path="playlist" element={<TapPlayList/>}/>
          <Route path="community" element={<TapCommunity/>}/>
        </Route>
      </Route>
      <Route path={`${route.SHORTS}`} element={<Shorts/>}/>
      <Route path={`${route.SUBSCRIBE}`} element={<Subscriptions/>}/>
      <Route path={`${route.MYPAGE}`} element={<MyPage/>}/>
      <Route path={`${route.MUSIC}`} element={<Music/>}/>
      <Route path={`${route.LOGIN}`} element={<HeaderLayout/>} errorElement={null}>
        <Route index element={<Login/>}/>
      </Route>
    </Route>
  )
)
