import { atom } from "recoil";
import { useRecoilState, useResetRecoilState} from "recoil";

/*
        [recoil 수정]
        타입정의 필요
*/

const initOpenMore = atom<any>({
    key:"openMore",
    default: false,
})

export const useOpenMore = ()=>{
    const [state, setState] = useRecoilState(initOpenMore);
    const resetState = useResetRecoilState(initOpenMore);
    const reset = () => resetState();
    

    return [state, setState, reset];
}