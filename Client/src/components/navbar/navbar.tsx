import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';

import { getCategories } from '../../api';
import { ICategory } from '../../types/category';
import './navbar.css';

interface IProps {
  className?: string;
}

const b = block('navbar');

/** Панель навигации. */
export default function NavBar({ className }: IProps) {
  const [ categories, setCategories ] = useState<Array<ICategory>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchData();
  }, []);

  const listItems = categories.map((category) => (
    <Link key={category.Id} to={`/category/${category.Name}`}>{category.Name}</Link>
  ));

  return (
    <div className={b(null, className)}>
      <p>Категории:</p>
      {listItems}
    </div>
  );
}