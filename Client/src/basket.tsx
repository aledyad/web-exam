import React, { useState, useEffect } from "react";
import { getBasket } from "./api";
import { IProduct } from "./types/product";
import Product from "./product";
import block from 'bem-cn-lite';
import './basket.css';

export default function Backet(){
    const [basket, setBasket] = useState<Array<IProduct>>([]);

    useEffect(() => {
        getBasket().then((result) => {
            setBasket(result);
        });
    }, []);

    const b = block("basket");

    return(
        <div className={b()}>
            <p>Корзина:</p>
            <div className={b("content")}>
                {basket.map((product) => (<Product key={product.Id} product={product} />))}
            </div>
        </div>
    );    
}