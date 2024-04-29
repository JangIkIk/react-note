import React from "react";
import {Routes, Route,Outlet} from "react-router";
import {Home} from "./pages/home/index";
import {Login} from "./pages/login/index";
import { Channel } from "./pages/channel/index";
import {BaseLayout, HeaderLayout} from "./widget/layout/index";
import { DebugLineCheck } from "@app/shared/ui/debugLineCheck/DebugLineCheck";
import { NotFound } from "@shared/ui/notFound/NotFound";





const HeaderAndAsideLayout = ()=>{
    return(
        <BaseLayout>
            <Outlet/>
            <DebugLineCheck/>
        </BaseLayout>
    );
}

const HeaderAndLayout = ()=>{
    return(
        <HeaderLayout>
            <Outlet/>
            <DebugLineCheck/>
        </HeaderLayout>
    );
}

/*
    해당 방식처럼 레이아웃을 잡는 컴포넌트를 만든후 라우터안에서
    정의 해주면 또다른 Aside의 사이즈가 달라져도 다른곳으로 묶어줄수가 있다.
    단 한간지 의문점은? 레이아웃이 바뀔일이 별로 없다는것..
    그경우에는 해당 페이지에서 컴포넌트별 Route만 정의해주고
    App.tsx에서 BaseLayout 컴포넌트로 Roter.tsx를 감싸주면 끝
    즉, Layout컴포넌트를 추가하면 삭제,추가 하기가 간단하다.
*/ 

const Router = ()=>{
    return(
        <>
            <Routes>
                <Route element={<HeaderAndAsideLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Channel/:id" element={<Channel/>}/>
                </Route>
                <Route element={<HeaderAndLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route path="/error" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default Router;