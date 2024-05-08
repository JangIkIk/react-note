import React, {useState} from "react";
import "./shortsContent.css";
import testVideo from "@videos/test.mp4";
import { useAppDispatch, useAppSelector } from "@app/state/store";
import {changeComment, changeMore} from "@state/shorts-icons-slice";


export const ShortsContent = ()=>{
    const [openComment, setOpenComment] = useState(false);
    const dispatch = useAppDispatch();
    const select = useAppSelector( state => state.ShortsIconsSlice);
    const openCommentBox = () => dispatch(changeComment());


    return(
        <div className="shorts-content">
            <div className={`shorts-content-container`}>
                <video  className="shorts-content-container__video" controls loop autoPlay>
                    <source src={testVideo} type="video/mp4"></source>
                </video>
                {/* 해당부분은 다른 features 로 이동 - >  */}
                <div className={`shorts-content-video__icons ${select.comment ? "shorts-content-video__icons--active" : ""}`}>
                    {/* 좋아요 */}
                    <div className="shorts-content-video__icons__btn">
                        <div className="shorts-content-video__icons__btn__svg"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12ZM192-624v480H48v-480h144Z"/></svg></div>
                        {/* <div className="shorts-content-video__icons__btn__svg"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M720-144H264v-480l288-288 32 22q18 13 26.5 33t3.5 41l-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L787-188q-9 20-27 32t-40 12ZM192-624v480H48v-480h144Z"/></svg></div> */}
                        <p className="shorts-content-video__icons__btn__text">3.9만</p>
                    </div>
                    {/* 싫어요 */}
                    <div className="shorts-content-video__icons__btn">
                        <div className="shorts-content-video__icons__btn__svg"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm528 480v-480h144v480H768Z"/></svg></div>
                        {/* <div className="shorts-content-video__icons__btn__svg"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M240-816h456v480L408-48l-32-22q-18-13-26.5-33t-3.5-41l38-192H120q-30 0-51-21t-21-51v-57q0-8 1.5-14.5T54-493l119-279q8-20 26.5-32t40.5-12Zm528 480v-480h144v480H768Z"/></svg></div> */}
                        <p className="shorts-content-video__icons__btn__text">싫어요</p>
                    </div>
                    {/* 댓글 */}
                    <div className="shorts-content-video__icons__btn"  onClick={openCommentBox}>
                        <div className="shorts-content-video__icons__btn__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M240-384h480v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72ZM864-96 720-240H168q-29.7 0-50.85-21.15Q96-282.3 96-312v-480q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v696ZM168-312h582l42 42v-522H168v480Zm0 0v-480 480Z"/></svg>
                        </div>
                        <p className="shorts-content-video__icons__btn__text">375</p>
                    </div>
                    {/* 공유 */}
                    <div className="shorts-content-video__icons__btn"  onClick={()=> setOpenComment(!openComment)}>
                        <div className="shorts-content-video__icons__btn__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M696-96q-50 0-85-35t-35-85q0-8 1-14.5t3-14.5L342-390q-15 16-35.35 23-20.36 7-42.65 7-50 0-85-35t-35-85q0-50 35-85t85-35q22 0 42.5 7.5T342-570l238-145q-2-8-3-14.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-22.29 0-42.65-7Q633-638 618-654L380-509q2 8 3 14.5t1 14.5q0 8-1 14.5t-3 14.5l238 145q15-17 35.35-23.5Q673.71-336 696-336q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-600q20.4 0 34.2-13.8Q744-723.6 744-744q0-20.4-13.8-34.2Q716.4-792 696-792q-20.4 0-34.2 13.8Q648-764.4 648-744q0 20.4 13.8 34.2Q675.6-696 696-696ZM264-432q20.4 0 34.2-13.8Q312-459.6 312-480q0-20.4-13.8-34.2Q284.4-528 264-528q-20.4 0-34.2 13.8Q216-500.4 216-480q0 20.4 13.8 34.2Q243.6-432 264-432Zm432 264q20.4 0 34.2-13.8Q744-195.6 744-216q0-20.4-13.8-34.2Q716.4-264 696-264q-20.4 0-34.2 13.8Q648-236.4 648-216q0 20.4 13.8 34.2Q675.6-168 696-168Zm0-576ZM264-480Zm432 264Z"/></svg>
                        </div>
                        <p className="shorts-content-video__icons__btn__text">공유</p>
                    </div>
                    {/* 
                        더보기 창에서 모달창이 열리는 상태는 select.more로 사용예정
                    */}
                    <div className="shorts-content-video__icons__btn">
                        <div className="shorts-content-video__icons__btn__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z"/></svg>
                        </div>
                        <p className="shorts-content-video__icons__btn__text"></p>
                    </div>
                    {/* 프로필 */}
                    <div className="shorts-content-video__icons__btn">
                        <div className="shorts-content-video__icons__btn__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`shorts-content-comment ${select.comment ? "shorts-content-comment--active" : ""}`}>
                 댓글창
            </div>
        </div>
    );
}