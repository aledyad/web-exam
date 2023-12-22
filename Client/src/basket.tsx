import React, { useState, useEffect } from "react";
import { getBasket } from "./api";
import { IProduct } from "./types/product";
import Product from "./product";

export default function Backet(){
    const [basket, setBasket] = useState<Array<IProduct>>([]);

    useEffect(() => {
        getBasket().then((result) => {
            setBasket(result);
        });
    }, []);

    return(
        <>
            <p>Корзина:</p>
            {basket.map((product) => (<Product product={product} />))}
        </>
    );    
}