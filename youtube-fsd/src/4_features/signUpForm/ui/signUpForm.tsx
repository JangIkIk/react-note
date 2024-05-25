import React from "react";
import { useForm } from "react-hook-form";
import { _ } from "./signUpFormStyle";
import type { SignUpValue } from "../types";
import { useSignUp } from "../api/useSignUp";
import { InputDefault, ButtonDefault} from "@shared/ui";
import { IDREGEX, PWREGEX, NAMEREGEX} from "@shared/consts";

/*
    [고민]
    react-hook-form을 사용하기때문에 onClick부분에서 함수가 여러개 겹친다.
    좀더 보기좋게 줄이거나 or useRef로 변경하는것을 고민해보자
*/
export const SignUpForm = ()=>{
    const { register, formState:{errors}, watch, handleSubmit} = useForm<SignUpValue>({
        mode: "onBlur",
        defaultValues: {
            id: "",
            pw: "",
            pwCheck: "",
            name: "",
        }
    });
    const [signUpFetch] = useSignUp();
    const onSubmit = (data:SignUpValue)=> {
        const {id, pw, name} = data;
        signUpFetch({id,pw,name})
    };

    return(
        <_.signUpForm>
            <InputDefault 
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
            {errors?.id ? <_.regexText>{errors.id.message}</_.regexText> : null}

            <InputDefault 
            type="text" 
            placeholder="비밀번호" 
            {...register("pw",{
                required: '비밀번호를 입력해주세요',
                pattern: {
                    value: PWREGEX,
                    message: "비밀번호 (8~20자), (소문자, 대문자, 특수문자, 숫자포함 )",
                },
            })}
            />
            {errors?.pw ? <_.regexText>{errors.pw.message}</_.regexText> : null}

            <InputDefault 
            type="text" 
            placeholder="비밀번호 확인" 
            {...register("pwCheck",{
                required: '비밀번호 확인을 입력해주세요',
                validate: (value)=>{
                   return  watch().pw !== value ? "비밀번호가 일치하지 않습니다" : true;
                },
            })}/>
            {errors?.pwCheck ? <_.regexText>{errors.pwCheck.message}</_.regexText> : null}

            <InputDefault 
            type="text" 
            placeholder="이름" 
            {...register("name",{
                required: "이름을 입력해주세요",
                pattern: {
                    value: NAMEREGEX,
                    message: "이름 (1~10자)"
                }
            })}/>
            {errors?.name ? <_.regexText>{errors.name.message}</_.regexText> : null}

            <ButtonDefault 
            text="회원가입"
            onClick={handleSubmit(onSubmit)}
            />
        </_.signUpForm>
    );
}