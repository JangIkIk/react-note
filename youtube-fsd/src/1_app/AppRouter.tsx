import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import {useCookies} from "react-cookie";

import { DefaultLayout } from "./layout/defaultLayout";
import { HeaderLayout } from "./layout/headerLayout";

import { Home } from "@pages/home";
import { VideoDetail } from "@pages/videoDetail";
import { ChannelDetail } from "@pages/channelDetail/index";
import { Login } from "@pages/login";
import { SignUp } from "@pages/signUp";
// import { Home as TapHome } from "@pages/channelDetail-home";
// import { Videos as TapVideos } from "@pages/channelDetail-videos";
// import { Shorts as TapShorts } from "@pages/channelDetail-shorts";
// import { PlayList as TapPlayList } from "@pages/channelDetail-playlist";
// import { Community as TapCommunity } from "@pages/channelDetail-community";


// 임시: 수정필요
const WithAuth = () => {
  const [cookie] = useCookies(["accessToken"]);
  if(!cookie.accessToken){
    alert("로그인이 필요한 서비스입니다.");
  }
  return cookie.accessToken ? <Outlet/> : <Navigate to="/"/>
};



export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />} errorElement={null}>
        <Route index element={<Home />} />
        <Route element={<WithAuth/>}>
          <Route path={"channel/:channelidx"} element={<ChannelDetail />}>
            {/* <Route index element={<TapHome />} />
            <Route path="videos" element={<TapVideos />} />
            <Route path="shorts" element={<TapShorts />} />
            <Route path="playlist" element={<TapPlayList />} />
            <Route path="community" element={<TapCommunity />} /> */}
          </Route>
        </Route>
      </Route>
      <Route path={"/"} element={<HeaderLayout />} errorElement={null}>
        <Route path={"login"} element={<Login />} />
        <Route path={"signup"} element={<SignUp />} />
        <Route path={"videoDetail/:videoidx"} element={<VideoDetail/>}/>
      </Route>    
    </>
  )
);
