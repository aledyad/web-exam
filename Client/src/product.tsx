import React from "react";
import { IProduct } from "./types/product";

interface IProductProps {
    product: IProduct
}

export default function Product(props: IProductProps){
    const product = props.product;
    return(
        <>
            <img src={`/images/${product.PhotoId}`} alt={product.Name} />
            <p>product.Name</p>
            <p>{`Категория: ${product.Category.Name}`}</p>
            <p>{`Цена: ${product.Price}`}</p>
        </>
    )
}