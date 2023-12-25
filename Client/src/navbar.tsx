import { useState, useEffect } from 'react';
import { getCategories } from './api';
import { ICategory } from './types/category';
import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn-lite';
import './navbar.css';

export default function NavBar(){
    const [categories, setCategories] = useState<Array<ICategory>>([]);

    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result);
        });
    }, []);

    const listItems = categories.map((category) => (
        <Link key={category.Id} to={`/category/${category.Name}`}>{category.Name}</Link>
    ));

    return(
        <div className={block("navbar")()}>
            <p>Категории:</p>
            {listItems}
        </div>
    );
}