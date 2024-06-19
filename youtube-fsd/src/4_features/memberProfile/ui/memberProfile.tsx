import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { _ } from "./memberProfileStyle";
import { useGetMemberProfile } from "../api/useGetMemberProfile";
import {usePutMemberProfile} from "../api/usePutMemberProfile";
/*
  해당부분에서 역할은 끝났다.
  하지만 문제는 , 프로필 이미지를 수정하면 바뀐 이미지로 헤더부분에서 변경되어야 한다. 
  제일 쉬운방법은 홈으로 리다이렉트 하는 방법이 있지만..
  리다이렉트를 하는 순간 페이자가 새로고침이 일어나 모든 부분이 다시 렌더링이 발생한다. 
  이는 절대적으로 효울적이지 못함...
  그렇기에 바뀐 헤더부분을 이미지가 변경된부분만 데이터 요청을 다시하여 렌더링을 하고
  그와 동시에 이미지를 변경했다면 이미지 변경 모달은 닫혀야 한다.

  이미지가 바뀌었을때는 어떤방식으로 처리해야할까?
  간단히 useState로 처리하거나, 상태관리를 이용할수가 있다. 하지만 유저의 정보부분은
  헤더쪽에서만 사용하고 있기때문에 useState로 해당 컴포넌트만 렌더링 시키는게 좋을것 같다.
*/

export const MemberProfile = () => {
  const [__, ___, removeCookie] = useCookies();
  const [profileInfo] = useGetMemberProfile();
  const [putMemberProfile] = usePutMemberProfile();
  const [memberModal, setMemberModal] = useState(false);
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [profilePreviewImg, setProfilePreviewImg] = useState<string>("");
  const profileImgRef = useRef<HTMLInputElement>(null);
  
  const onChangePreviewImg = ()=>{
    if(profileImgRef.current?.files?.length){
      const result = URL.createObjectURL(profileImgRef.current.files[0]);
      setProfilePreviewImg(result);
    }
    return;
  };
  const onSubmit = ()=> {
    if(profileImgRef.current?.files?.length){
      putMemberProfile(profileImgRef.current.files[0]);
      setProfileModal(!profileModal);
    }
    return;
  }

  return (
    <>
      {/* 이름 및 이미지 라인 */}
      <_.memberIcons onClick={() => setMemberModal(!memberModal)}>
        {profileInfo?.profileImg ? (
          // 유저이미지 라인
          <_.memberImg
            src={`${process.env.REACT_APP_API_URL}/${profileInfo.profileImg}`}
            alt={`${profileInfo.profileImg}`}
          />
        ) : (
          <svg
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
          </svg>
        )}
      </_.memberIcons>
      {/* 유저 이름 */}
      <span style={{ color: "white" }}>{profileInfo?.name}</span>
      {memberModal ? (
        <_.modal>
          <_.modalButton onClick={() => removeCookie("accessToken")}>
            로그아웃
          </_.modalButton>
          <_.modalButton onClick={() => setProfileModal(!profileModal)}>
            프로필수정
          </_.modalButton>
          {/* <_.modalButton>라이트모드</_.modalButton> */}
          {/* <_.modalButton>다크모드</_.modalButton> */}
        </_.modal>
      ) : (
        ""
      )}
      {profileModal ? (
        <_.profileImgModal>
          <_.profileImgContainer>
            {/* 현재이미지와 && 변경되 프리뷰 이미지를 본다 */}
            {profileInfo?.profileImg ? (
              <_.memberImg
                src={profilePreviewImg ? profilePreviewImg : `${process.env.REACT_APP_API_URL}/${profileInfo.profileImg}`}
                alt={`${profileInfo.profileImg}`}
                size={100}
              />
            ) : (
              <svg
                height="100px"
                viewBox="0 -960 960 960"
                width="100px"
                fill="#e8eaed"
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
            )}
            <input type="file" onChange={onChangePreviewImg} ref={profileImgRef}/>
            <button onClick={onSubmit}>저장하기</button>
            <button onClick={() => setProfileModal(!profileModal)}>
              취소하기
            </button>
          </_.profileImgContainer>
        </_.profileImgModal>
      ) : (
        ""
      )}
    </>
  );
};
