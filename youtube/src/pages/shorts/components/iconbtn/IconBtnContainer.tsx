import React, {useState, useEffect} from "react";
import IconBtnView from "./IconBtnView.tsx";

export interface PropsType{
    text: string;
    iconName: string;
}


// 커스텀훅에 컨트롤러로 분리 ~ 

function IconBtnContainer(props: PropsType){
    const [active, serActive] = useState<boolean>(false);
    const clickIcon = ()=>{
        serActive(!active);
    }
    useEffect(()=>{
        fetch("")
        .then( res => console.log("상태변경"))
        .catch( error => console.log("에러"))
        
    },[active])
    return(
        <IconBtnView text={props.text} iconName={props.iconName} active={active} clickIcon={clickIcon}/>
    );
}

export default IconBtnContainer;