import React from "react";
import { IProduct } from "./types/product";
import { addToBasket, removeFromBasket } from "./api";

interface IProductProps {
    product: IProduct
}

export default function Product(props: IProductProps){
    const product = props.product;
    const [isInBasket, SetIsInBasket] = React.useState(product.IsInBasket);

    const buttonCaption = isInBasket ? "Удалить из корзины" : "Добавить в корзину";
    const buttonAction = () => {
        if (isInBasket) {
            removeFromBasket(product.Id)
        }
        else {
            addToBasket(product.Id)
        }
        SetIsInBasket(!isInBasket);
    }

    return(
        <>
            <img src={`/images/${product.PhotoId}`} alt={product.Name} />
            <p>product.Name</p>
            <p>{`Категория: ${product.Category.Name}`}</p>
            <p>{`Цена: ${product.Price}`}</p>
            <button onClick={buttonAction}>{buttonCaption}</button>
        </>
    )
}