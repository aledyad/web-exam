import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';
import './header.css';

export default function Header() {
  return (
    <div className={block('header')()}>
      <a href='/'>
        <img src='/images/favicon.ico' alt='Best shop ever' />
      </a>
      <Link to='basket'>Корзина</Link>
    </div>
  );
}