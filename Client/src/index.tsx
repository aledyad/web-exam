import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './navbar';
import Basket from './basket';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CategoryProducts from './category-products';
import Header from './header';
import block from 'bem-cn-lite';
import './styles/app.css';

const b = block('layout');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className={b()}>
        <Header />
        <div className={b("middle")}>
          <NavBar />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/category/:name" element={<CategoryProducts />} />
          </Routes>
        </div>
      </div>
    </HashRouter>    
  </React.StrictMode>
);