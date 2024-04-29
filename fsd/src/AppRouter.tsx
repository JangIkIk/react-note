import React from "react";
import {Routes, Route,Outlet} from "react-router";
import { DefaultLayout } from "./components/defaultLayout/DefaultLayout";
import { OnlyHeaderLayout } from "./components/onlyHeadrLayout/OnlyHeaderLayout";
import { Home } from "./pages/home/Home";
import { Channel } from "./pages/channel/Channel";
import { LoginForm } from "@app/features/login/LoginForm";


const Layout = ()=>{
    return(
        <DefaultLayout>
            <Outlet/>
        </DefaultLayout>
    );
}

const HeaderLayout = ()=>{
    return(
        <OnlyHeaderLayout>
            <Outlet/>
        </OnlyHeaderLayout>
    );
}

export const AppRouter = ()=>{
    return(
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Channel/:id" element={<Channel/>}/>
                </Route>
                <Route element={<HeaderLayout/>}>
                    <Route path="/login" element={<LoginForm/>}/>
                </Route>
            </Routes>
        </>
    );
}
