import React from "react";
import { Link } from "react-router-dom";
import block from 'bem-cn-lite';
import './header.css';

export default function Header(){
    return(
        <div className={block("header")()}>
            <img src="/images/favicon.ico" alt="Best shop ever" />
            <Link to="basket">Корзина</Link>
        </div>
    )
}