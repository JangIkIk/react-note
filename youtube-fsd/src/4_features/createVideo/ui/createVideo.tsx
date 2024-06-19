import React, {useRef} from "react";
import { _ } from "./createVideoStyle";
import { usePostCreateVideo } from "../api/usePostCreateVideo";
import { InputDefault, ButtonDefault } from "@shared/ui";


export const CreateVideo = (props : {onClose?: ()=> void})=>{
    const {onClose} = props;
    const [postCreateVideo, videoData] = usePostCreateVideo();
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    // 해당부분에서 fetch를 보내고 난후에 모달창을 어떻게 닫아야할까

    const onClickSubmit = () => {
        if(!titleRef.current?.value) return;
        if(!contentRef.current?.value) return;
        if(!fileRef.current?.files) return;
        const videoInfo = {
            title: titleRef.current?.value,
            content: contentRef.current?.value,
            file: fileRef.current.files[0]
        };
        postCreateVideo(videoInfo, onClose);
    }
    
    
    return (
        <_.createVideo>
            <_.container>
                <div>
                    <InputDefault type="text" placeholder="제목" ref={titleRef}/>
                </div>
                <div>
                    <InputDefault type="text" placeholder="내용" ref={contentRef}/>
                </div>
                <div>
                    <InputDefault  type="file" placeholder="제목" ref={fileRef}/>
                </div>
                <ButtonDefault text={"생성하기"} onClick={onClickSubmit}/>
                <ButtonDefault text={"취소하기"} onClick={onClose}/>
            </_.container>
        </_.createVideo>
    );
}