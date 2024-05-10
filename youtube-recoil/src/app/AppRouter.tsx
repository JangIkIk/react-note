import React from "react";
import { createBrowserRouter} from "react-router-dom";
import { DefaultLayout } from "@widgets/defaultLayout";



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            
        ]
    }
        
    // {
    //     path: "/",
    //     element: <DefaultLayout/>,
    //     errorElement: <NotFound/>,
    //     children: [
    //         {
    //             path: "/",
    //             element: <Home/>
    //         },
    //         {
    //             path: "channel/:id",
    //             element: <Channel/>,
    //             loader: async ({params})=>{
    //                 return checkChannelLoader(params.id);
    //             }
    //         },
    //         {
    //             path: "shorts",
    //             element: <Shorts/>
    //         }
    //     ],
    // },
    // {
    //     path: "/",
    //     element: <OnlyHeaderLayout/>,
    //     children: [
    //         {
    //             path: "login",
    //             element: <Login/>
    //         },
    //     ]
    // }
])