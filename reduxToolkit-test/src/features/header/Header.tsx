import React from "react";
import "./header.css";
import { Search } from "../header-search-box/SearchBox";
import {MemberBox} from "../header-member-box/MemberBox";
import { checkUser } from "@utility/checkUser";
import { GuestBox } from "../header-guest-box/GuestBox";
import { LogoBox } from "../header-logo-box/LogoBox";
export const Header = () => {
  const authorization = checkUser();  

  return (
    <div className="header">
      <div className="header-start"><LogoBox/></div>
      <div className="header-center"><Search /></div>
      <div className="header-end">
        {authorization 
        ? <MemberBox/> 
        :<GuestBox/>}
      </div>
    </div>
  );
};