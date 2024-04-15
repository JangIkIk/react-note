import React from "react";
import HomeContainer from "../pages/home/HomeContainer.tsx";
import ShortsContainer from "../pages/shorts/ShortsContainer.tsx";
import ChannelContainer from "../pages/channel/ChannelContainer.tsx";
import ChannelHome from "../pages/channel/components/ChannelHome.tsx";
import ChannelVideos from "../pages/channel/components/ChannelVideos.tsx";
import ChannelShorts from "../pages/channel/components/ChannelShorts.tsx";
import ChannelPlayList from "../pages/channel/components/ChannelPlayList.tsx";
import ChannelCommunity from "../pages/channel/components/ChannelCommunity.tsx";
import SubscriptionsContainer from "../pages/subscriptions/SubscriptionsContainer.tsx";
import MusicContainer from "../pages/music/MusicContainer.tsx";
import MyContainer from "../pages/my/MyContainer.tsx";
import { Routes, Route, Outlet } from "react-router-dom";

const ChannelLayout = () => {
  return (
    <ChannelContainer>
      <Outlet />
    </ChannelContainer>
  );
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/shorts" element={<ShortsContainer />} />
      <Route path=":id" element={<ChannelLayout />}>
        <Route index element={<ChannelHome />} />
        <Route path="videos" element={<ChannelVideos />} />
        <Route path="shorts" element={<ChannelShorts />} />
        <Route path="playlists" element={<ChannelPlayList />} />
        <Route path="community" element={<ChannelCommunity />} />
      </Route>
      <Route path="subscriptions" element={<SubscriptionsContainer/>}/>
      <Route path="music" element={<MusicContainer/>}/>
      <Route path="my" element={<MyContainer/>}/>
    </Routes>
  );
}

export default Router;
