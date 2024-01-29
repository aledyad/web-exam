import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import block from 'bem-cn-lite';

import NavBar from '../navbar/navbar';
import Basket from '../basket/basket';
import CategoryProducts from '../category-products/category-products';
import Header from '../header/header';
import './app.css';

const b = block('app');

export default function App() {
  return (
    <HashRouter>
      <div className={b()}>
        <Header className={b('header')} />
        <div className={b('slot')} >
          <NavBar className={b('navbar')} />
          <div className={b('content')}>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/category/:name" element={<CategoryProducts />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}