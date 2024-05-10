import home from "@images/home.svg";
import shorts from "@images/shorts.svg";
import subscriptions from "@images/subscriptions.svg";
import my from "@images/my.svg";
import time from "@images/time.svg";
import music from "@images/music.svg";


export const memberData = [
    {
        src: home,
        name: "홈",
        router: "/",
    },
    {
        src: shorts,
        name: "shorts",
        router: "shorts",
    },
    {
        src: subscriptions,
        name: "구독",
        router: "subscriptions",
    },
    {
        src: my,
        name: "나",
        router: "my",
    },
    {
        src: music,
        name: "음악",
        router: "music",
    },
]
export const guestData = [
    {
        src: home,
        name: "홈",
        router: "/",
    },
    {
        src: shorts,
        name: "shorts",
        router: "shorts",
    },
    {
        src: subscriptions,
        name: "구독",
        router: "subscriptions",
    },
    {
        src: my,
        name: "나",
        router: "my",
    },
    {
        src: time,
        name: "시청기록",
        router: "time",
    },
]