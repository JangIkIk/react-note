import {atom} from "recoil";
import { useRecoilState } from "recoil";


/*
        [recoil 수정]
        타입정의 필요
*/
const initChangeTheme = atom<any>({
    key: "changeTheme",
    default: "dark",
});

export const useChangeTheme = () => {
    const [state, setState] = useRecoilState(initChangeTheme);
    /*
        [recoil 수정]
        선택에 따른 상태변경함수 만들어야하나
    */
    return [state, setState];
}