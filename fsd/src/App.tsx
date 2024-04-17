import React from "react";
import BaseLayout from "components/baseLayout/BaseLayout";
import "./global.css";
import Router from "./Router";

/*
    임시로 부모가 아닌 자식들이 자체적으로 Layout을 잡아본다
    이후에 문제가 있다면 App컴포 넌트를 부모기준으로 Layout을 다시잡는다
    Layout 컴포넌트를 만들어서 잡는다고 해도 한번을 더거쳐야 한다..
    굳이..? App에서 잡아도 되는 상황인것같은데 ... 흠
*/

const App = ()=>{
    return(
        <>
            <BaseLayout>
                <Router/>
            </BaseLayout>
        </>
    );
}

export default App;