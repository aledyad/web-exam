import React from "react";
import { IProduct } from "./types/product";
import { addToBasket, removeFromBasket } from "./api";
import ProductButton from "./product-button";
import block from 'bem-cn-lite';
import './product.css';

const b = block('product');

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
        <div className={b()}>
            <div className={b("image-container", { "width": true, "height": true })}>
                <img className={b("image", { "maxwidth": true, "maxheight": true })} src={`/images/${product.PhotoId}`} alt={product.Name} />
            </div>
            <p>product.Name</p>
            <p>{`Категория: ${product.Category.Name}`}</p>
            <p>{`Цена: ${product.Price}`}</p>
            <ProductButton
                caption={buttonCaption}
                handleClick={buttonAction} />
        </div>
    )
}