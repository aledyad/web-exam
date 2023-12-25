import React from 'react';
import ReactDOM from 'react-dom/client';
import TestButton from './test-button';
import NavBar from './navbar';
import Basket from './basket';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CategoryProducts from './category-products';
import Header from './header';

require('./styles/app.css');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TestButton text='Click me1' />
    <HashRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/category/:name" element={<CategoryProducts />} />
      </Routes>
    </HashRouter>    
  </React.StrictMode>
);