import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { _ } from "./loginFormStyle";
import type { LoginVlaue } from "../types";
import { useLogin } from "../api/useLogin";
import { InputDefault, ButtonDefault } from "@shared/ui";
import { IDREGEX , PWREGEX} from "@shared/consts";


export const LoginForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<LoginVlaue>({
        mode: "onBlur",
        defaultValues:{
            id: "",
            pw: ""
        }
    })
    const navigate = useNavigate();
    const onClickRoute = () => navigate("/signup");
    const [loginFetch] = useLogin("auth");
    const onSubmit = (data:LoginVlaue) => loginFetch(data);

    return(
        <_.loginForm>
            <_.title>로그인</_.title>

            <_.inputContainer>
                <InputDefault
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    {...register("id",{
                        pattern: {
                            value: IDREGEX,
                            message: "아이디가 올바르지 않습니다" 
                        }
                    })}
                />
                <InputDefault
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    {...register("pw",{
                        pattern: {
                            value: PWREGEX,
                            message: "비밀번호가 올바르지 않습니다" 
                        }
                    })}
                />
            </_.inputContainer>

            <_.buttonsContainer>
                <ButtonDefault 
                text={"로그인하기"}
                onClick={handleSubmit(onSubmit)}
                />
                <ButtonDefault text={"회원가입"} onClick={onClickRoute}/>
            </_.buttonsContainer>
        </_.loginForm>
    );
}