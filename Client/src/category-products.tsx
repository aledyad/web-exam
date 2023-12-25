import { useEffect, useState } from "react";
import { IProduct } from "./types/product";
import { getCategoryProducts } from "./api";
import Product from "./product";
import React from "react";
import { useParams } from "react-router-dom";
import block from 'bem-cn-lite';
import './category-products.css';

export default function CategoryProducts(){
    const [products, setProducts] = useState<Array<IProduct>>([]);

    const params = useParams();
    const categoryName = params.name;

    useEffect(() => {
        getCategoryProducts(categoryName!).then((result) => {
            setProducts(result);
        });
    }, [categoryName]);

    const b = block("category-products");

    return(
        <div className={b()}>
            <p>{`Товары категории "${categoryName}":`}</p>
            <div className={b("content")}>
                {products.map((product) => (<Product key={product.Id} product={product} />))}
            </div>
        </div>
    );     
}