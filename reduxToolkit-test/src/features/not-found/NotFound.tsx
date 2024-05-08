import React from "react";
import "./notFound.css";
import { useRouteError } from "react-router-dom";

export const NotFound = ()=>{
    const error = useRouteError();
    return(
        <p className="not-found">올바르지 않은접근</p>
    );
}