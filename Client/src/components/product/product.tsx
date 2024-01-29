import React from 'react';
import block from 'bem-cn-lite';

import { IProduct } from '../../types/product';
import { addToBasket, removeFromBasket } from '../../api';

import './product.css';

const b = block('product');

/** Параметры товара. */
interface IProductProps {
  /** Продукт. */
  product: IProduct;
}

/**
 * Товар.
 * @param props Параметры.
 */
export default function Product(props: IProductProps) {
  const product = props.product;
  const [ isInBasket, SetIsInBasket ] = React.useState(product.IsInBasket);

  const buttonCaption = isInBasket ? 'Удалить из корзины' : 'Добавить в корзину';
  const buttonAction = () => {
    if (isInBasket) {
      removeFromBasket(product.Id);
    }
    else {
      addToBasket(product.Id);
    }

    SetIsInBasket(!isInBasket);
  };

  return (
    <div className={b()}>
      <div className={b('image-container')}>
        <img className={b('image')} src={`/images/${product.PhotoId}`} alt={product.Name} />
      </div>
      <div className={b('description')}>
        <div>{product.Name}</div>
        <div>{`Категория: ${product.Category.Name}`}</div>
        <div>{`Цена: ${product.Price}`}</div>
      </div>
      <button className={b('button')} onClick={buttonAction}>{buttonCaption}</button>
    </div>
  );
}