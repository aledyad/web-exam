import * as React from 'react';
import { render } from 'react-dom';
import TestButton from './test-button';
import NavBar from './navbar';
import Basket from './basket';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CategoryProducts from './category-products';
import Header from './header';

require('./styles/app.css');

render(
  <>
    <TestButton text='Click me1' />
    <Header />
    <NavBar />
    <HashRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="basket" element={<Basket />} />
        <Route path="category/:name" element={<CategoryProducts />} />
      </Routes>
    </HashRouter>    
  </>,
  document.getElementById('root')
);
