import React from "react";
import { _ } from "./signUpFormStyle";
import { InputDefault, ButtonDefault} from "@shared/ui";
import { useForm } from "react-hook-form";

/*
  # useForm

  ##register: 입력 또는 선택 요소를 등록하고, 유혀성 검사 규칙을 적용
  - 구성: register(name. RegisterOptions)
  [RegisterOptions]
  1. ref(반응요소 참조) = {...register("test")} 
  2. required(빈값체크) = boolean
  3. maxLength(최대길이지정) = number
  4. minLength(최소길이지정) = number
  5. pattern(RegExp) = 정규표현식
  6. validate(유효성검사 함수) = function

  ## watch: 지정된 입력을 감시하고 해당 값을 반환, 입력 값을 렌더링하고, 조건별로 무엇을 렌더링할지에 사용

  ## formState: 전체 양식 상태에 대한 정보가 포함되어 있음, 사용자의 상호작용을 추적하는데 도움
  ## getValues: 양식값을 읽는데 최적화된 도우미, watch와 차이점은 다시 렌더링을 트리거 하지 않거나, 입력 변경 사항을 구독하지 않는다는 것
  ## mode: 전략을 설정하는것, 양식의 유효성을 언제 검사할지에 대한 방법인것같다.

  201 
  400
  401
  500

  
*/

export const SignUpForm = ()=>{
    const IDREGEX = /^[a-zA-Z0-9_-]{1,20}$/;
    const PWREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;
    const NAMEREGEX = /^[a-zA-Z]{1,10}$/;
    const url = process.env.REACT_APP_API_URL;
    console.log(url)
    const { register, formState:{errors}, watch, handleSubmit, setError} = useForm({
        mode: "onBlur",
        defaultValues: {
            id: "",
            pw: "",
            pwCheck: "",
            name: "",
        }
    });

    const onSubmit = async (d: any, e:any)=> {
        console.log("실행")
        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/channel`);
            if(!response.ok){
                throw new Error("에러")
            }
            const jsonData = await response.json();
            console.log(jsonData);
        }
        catch(error){
            
            console.log("error:",error);
        }
    }
    

    
    return(
        <_.signUpForm>
            <input 
            type="text" 
            placeholder="아이디" 
            {...register("id",{
                required: '아이디를 입력해주세요',
                pattern: {
                    value: IDREGEX,
                    message: "아이디 (1~20자)"
                },
            })}
            />
            {errors?.id ? <p style={{color: "white"}}>{errors.id.message}</p> : null}

            <input 
            type="text" 
            placeholder="비밀번호" 
            {...register("pw",{
                required: '비밀번호를 입력해주세요',
                // pattern: {
                //     value: PWREGEX,
                //     message: "비밀번호 (8~20자), (소문자, 대문자, 특수문자, 숫자포함 )",
                // },
            })}
            />
            {errors?.pw ? <p style={{color: "white"}}>{errors.pw.message}</p> : null}

            <input 
            type="text" 
            placeholder="비밀번호 확인" 
            {...register("pwCheck",{
                required: '비밀번호 확인을 입력해주세요',
                // validate: (value)=>{
                //    return  watch().pw !== value ? "비밀번호가 일치하지 않습니다" : true;
                // },
            })}/>
            {errors?.pwCheck ? <p style={{color: "white"}}>{errors.pwCheck.message}</p> : null}

            <input 
            type="text" 
            placeholder="이름" 
            {...register("name",{
                required: "이름을 입력해주세요",
                pattern: {
                    value: NAMEREGEX,
                    message: "이름 (1~10자)"
                }
            })}/>
            {errors?.name ? <p style={{color: "white"}}>{errors.name.message}</p> : null}

            <button onClick={handleSubmit(onSubmit)}>회원가입</button>
        </_.signUpForm>
    );
}