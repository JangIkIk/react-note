import React from "react";
import { DefaultLayout } from "./components/defaultLayout/DefaultLayout";
import { OnlyHeaderLayout } from "./components/onlyHeadrLayout/OnlyHeaderLayout";
import { checkChannelLoader } from "./features/channel-details/api/checkChannelLoader";
import { createBrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Channel } from "./pages/Channel";
import { Shorts } from "./pages/Shorts";
import {Login} from "@pages/Login";
import { NotFound } from "./features/not-found/NotFound"; 



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "channel/:id",
                element: <Channel/>,
                loader: async ({params})=>{
                    return checkChannelLoader(params.id);
                }
            },
            {
                path: "shorts",
                element: <Shorts/>
            }
        ],
    },
    {
        path: "/",
        element: <OnlyHeaderLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>
            },
        ]
    }
])
// 기존 라우터 사용방식
// export const AppRouter = ()=>{
//     return(
//         <>
//             <Routes>
//                 <Route element={<Layout/>}>
//                     <Route path="/" element={<Home/>}/>
//                     <Route path="/Channel/:id" element={<Channel/>}/>
//                     <Route path="*" element={<NotFound/>}>
//                 </Route>
//                 <Route element={<HeaderLayout/>}>
//                     <Route path="/login" element={<Login/>}/>
//                 </Route>
//                 </Route>
//                 <Route path="*" element={<NotFound/>}>
//             </Routes>
//         </>
//     );
// }
