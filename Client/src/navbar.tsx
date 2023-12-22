import { useState, useEffect } from 'react';
import { getCategories } from './api';
import { ICategory } from './types/category';
import React from 'react';

export default function NavBar(){
    const [categories, setCategories] = useState<Array<ICategory>>([]);

    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result);
        });
    }, []);

    const listItems = categories.map((category) => (
        <li key={category.Id}><a href={`/#/category/${category.Name}`}>{category.Name}</a></li>
    ));

    return(
        <>
            <p>Категории:</p>
            <ul>{listItems}</ul>
        </>
    );
}