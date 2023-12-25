import React, { useState, useEffect } from 'react';

import block from 'bem-cn-lite';

import { getBasket } from './api';
import { IProduct } from './types/product';
import Product from './product';

import './basket.css';

export default function Backet() {
  const [ basket, setBasket ] = useState<Array<IProduct>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBasket();
      setBasket(data);
    };

    fetchData();
  }, []);

  const b = block('basket');

  return (
    <div className={b()}>
      <p>Корзина:</p>
      <div className={b('content')}>
        {basket.map((product) => (<Product key={product.Id} product={product} />))}
      </div>
    </div>
  );
}