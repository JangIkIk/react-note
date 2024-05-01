import home from "@images/home.svg";
import shorts from "@images/shorts.svg";
import subscriptions from "@images/subscriptions.svg";
import my from "@images/my.svg";
import time from "@images/time.svg";
import hot from "@images/hot.svg";
import shopping from "@images/shopping.svg";
import music from "@images/music.svg";
import movie from "@images/movie.svg";
import live from "@images/live.svg";
import game from "@images/game.svg";
import sport from "@images/sport.svg";
import light from "@images/light.svg";
import podcast from "@images/podcast.svg";

export const menuBtnsData = [
    {
        title: null,
        content: [
            {
                name: "홈",
                src: home,
                router: "/"
            },
            {
                name: "Shorts",
                src: shorts,
                router: "/"
            },
            {
                name: "구독",
                src: subscriptions,
                router: "/"
            },
        ]
    },
    {
        title: null,
        content: [
            {
                name: "나",
                src: my,
                router: "/"
            },
            {
                name: "시청기록",
                src: time,
                router: "/"
            }
        ]
    },
    {
        title: "탐색",
        content: [
            {
                name: "인기급상승",
                src: hot,
                router: "/"
            },
            {
                name: "쇼핑",
                src: shopping,
                router: "/"
            },
            {
                name: "음악",
                src: music,
                router: "/"
            },
            {
                name: "영화",
                src: movie,
                router: "/"
            },
            {
                name: "실시간",
                src: live,
                router: "/"
            },
            {
                name: "게임",
                src: game,
                router: "/"
            },
            {
                name: "스포츠",
                src: sport,
                router: "/"
            },
            {
                name: "학습프로그램",
                src: light,
                router: "/"
            },
            {
                name: "팟캐스트",
                src: podcast,
                router: "/"
            },
        ]
    },
]