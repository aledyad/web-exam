import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';

import { getCategories } from '../../api';
import { ICategory } from '../../types/category';
import './navbar.css';

/** Панель навигации. */
export default function NavBar() {
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
    <div className={block('navbar')()}>
      <p>Категории:</p>
      {listItems}
    </div>
  );
}