import {route} from "@shared/consts/index";

export const buttonData = [
    {
        src: {
            xmlns: "http://www.w3.org/2000/svg",
            width:"24px",
            height: "24px",
            viewBox: "0 -960 960 960",
            fill:"#e8eaed",
            d:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",
        },
        name: "홈",
        router: route.HOME,
    },
    {
        src: {
            xmlns: "http://www.w3.org/2000/svg",
            width:"24px",
            height: "24px",
            viewBox: "0 -960 960 960",
            fill:"#e8eaed",
            d:"M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z",
        },
        name: "shorts",
        router: route.SHORTS,
    },
    {
        src: {
            xmlns: "http://www.w3.org/2000/svg",
            width:"24px",
            height: "24px",
            viewBox: "0 -960 960 960",
            fill:"#e8eaed",
            d:"M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z",
        },
        name: "구독",
        router: route.SUBSCRIBE,
    },
    {
        src: {
            xmlns: "http://www.w3.org/2000/svg",
            width:"24px",
            height: "24px",
            viewBox: "0 -960 960 960",
            fill:"#e8eaed",
            d:"m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z",
        },
        name: "나",
        router: route.MYPAGE,
    },
    {
        src: {
            xmlns: "http://www.w3.org/2000/svg",
            width:"24px",
            height: "24px",
            viewBox: "0 -960 960 960",
            fill:"#e8eaed",
            d:"M400-240q50 0 85-35t35-85v-280h120v-80H460v256q-14-8-29-12t-31-4q-50 0-85 35t-35 85q0 50 35 85t85 35Zm80 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
        },
        name: "음악",
        router: route.MUSIC,
    },
]