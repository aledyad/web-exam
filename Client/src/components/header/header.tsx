import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';
import './header.css';

interface IProps {
  className?: string;
}

const b = block('header');

/** Заголовок сайта. */
export default function Header({ className }: IProps) {
  return (
    <div className={b(null, className)}>
      <Link to='/'>
        <img src='/images/favicon.ico' alt='Best shop ever' />
      </Link>
      <Link to='/basket'>Корзина</Link>
    </div>
  );
}