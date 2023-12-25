import { useState, useEffect } from 'react';
import { getCategories } from './api';
import { ICategory } from './types/category';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <>
            <p>Категории:</p>
            {listItems}
        </>
    );
}