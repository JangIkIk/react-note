import React from "react";
import BaseLayout from "components/baseLayout/BaseLayout";
import "./global.css";
import Router from "./Router";

/*
    임시로 부모가 아닌 자식들이 자체적으로 Layout을 잡아본다
    이후에 문제가 있다면 App컴포 넌트를 부모기준으로 Layout을 다시잡는다
    Layout 컴포넌트를 만들어서 잡는다고 해도 한번을 더거쳐야 한다..
    굳이..? App에서 잡아도 되는 상황인것같은데 ... 흠

    현재 고려할사항... aside, header는 부모 파일에서 layout을 잡기때문에
    div를 이용하여 사이즈 조절이 가능함... 이점은 반응형에서도 좋게 작용할것같음
    단, 레이아웃의 구조가 틀려진다면? Asid의 모양이 틀려저서 다른게 들어가야 한다면?
*/

const App = ()=>{
    return(
        <>
            <Router/>
        </>
    );
}

export default App;