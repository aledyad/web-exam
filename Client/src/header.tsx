import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <img src="/images/favicon.ico" alt="Best shop ever" />
            <Link to="basket">Корзина</Link>
        </>
    )
}