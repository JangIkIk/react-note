import React from "react";
import { _ } from "./memberModalStyle";
import { useUserStore } from "@shared/lib";

export const MemberModal = ()=>{
    const deleteUser = useUserStore( state => state.deleteUser)
    return(
        <_.modal>
            <_.logout onClick={()=> deleteUser()} >로그아웃</_.logout>
        </_.modal>
    );
}