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
                router: "shorts"
            },
            {
                name: "구독",
                src: subscriptions,
                router: "subscriptions"
            },
        ]
    },
    {
        title: null,
        content: [
            {
                name: "나",
                src: my,
                router: "my"
            },
            {
                name: "시청기록",
                src: time,
                router: "time"
            }
        ]
    },
    {
        title: "탐색",
        content: [
            {
                name: "인기급상승",
                src: hot,
                router: "hot"
            },
            {
                name: "쇼핑",
                src: shopping,
                router: "shopping"
            },
            {
                name: "음악",
                src: music,
                router: "music"
            },
            {
                name: "영화",
                src: movie,
                router: "movie"
            },
            {
                name: "실시간",
                src: live,
                router: "live"
            },
            {
                name: "게임",
                src: game,
                router: "game"
            },
            {
                name: "스포츠",
                src: sport,
                router: "sport"
            },
            {
                name: "학습프로그램",
                src: light,
                router: "light"
            },
            {
                name: "팟캐스트",
                src: podcast,
                router: "podcast"
            },
        ]
    },
]