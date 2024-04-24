import { useEffect,useState } from "react";
import { useAppSelector } from "@app/hooks";

interface TestFilterType {
    id: number;
    previewImg: string;
    playTime: string;
    channelImg: string;
    title: string;
    channelName: string;
    view: number;
    creatDay: string;
    category: string;
}

export const useSortData = ()=>{
    const sortData = useAppSelector( state => state.sort.sortBy);
    const [newData, setNewData] = useState<TestFilterType[]>([]);
    

    useEffect(()=>{
        //  여기서 전역상태로 쿼리스트링으로 요청
        const allData = [
            {
                id: 1,
                previewImg: "https://i.ytimg.com/vi/1M2_u9plhFw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAZmUuZfevAN9Nsljl3NNC0Cflg",
                playTime: "1:58",
                channelImg: "https://yt3.ggpht.com/ytc/AIdro_nybQ3z-zCuZ36AkdCQXTr7o-xNg2GoyHA-JFAao8tQgwk=s68-c-k-c0x00ffffff-no-rj",
                title: "Playlist 이 노래 너무 좋은데? 나만 들을수 없지 | 사람들에게 잘안알려진 좋은 노래를 소개합니다. ㅋㅋㅋㅋ",
                channelName: "계정명",
                view: 70000,
                creatDay: "2014-04-14 09:00:00",
                category: "음악"
            },
            {
                id: 2,
                previewImg: "https://i.ytimg.com/vi/lRoYW0YNd1o/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGEoQjAP&rs=AOn4CLCvoiYAKahcgg9cJTLssdaY70qwQA",
                playTime: "4:00:03",
                channelImg: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj",
                title: "애인은 기간제 베프니까 | 카더가든, 검정치마, 혁오, 최유리",
                channelName: "계정명",
                view: 70000,
                creatDay: "2014-04-14 09:00:00",
                category: "음악"
            },
            {
                id: 3,
                previewImg: "https://i.ytimg.com/vi/vSx0mRzhza0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSqxQq5uoQxTRAt4Cuh16UwoUB9Q",
                playTime: "6:03",
                channelImg: "https://yt3.ggpht.com/O4-JMlpkU9Bv3wqmsf0BhN4pb7qvPbzuvea39ClD5go0EllXAGGhtUWnjbJCId7CgkksfpbpLA=s68-c-k-c0x00ffffff-no-rj",
                title: "드디어 밝혀지는 원피스의 정체를 알고있는 샹크스",
                channelName: "계정명",
                view: 70000,
                creatDay: "2014-04-14 09:00:00",
                category: "만화"
            },
        ]

        if(sortData === "전체"){
            setNewData(allData);
        }else{
            const testFilter = allData.filter( (data)=> data.category === sortData);
            setNewData(testFilter)

        }
    },[sortData])

    return newData;
}