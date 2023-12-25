import { useEffect, useState } from "react";
import { IProduct } from "./types/product";
import { getCategoryProducts } from "./api";
import Product from "./product";
import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryProducts(){
    const [products, setProducts] = useState<Array<IProduct>>([]);

    const params = useParams();
    const categoryName = params.name;

    useEffect(() => {
        getCategoryProducts(categoryName!).then((result) => {
            setProducts(result);
        });
    }, [categoryName]);

    return(
        <>
            <p>{`Товары категории "${categoryName}":`}</p>
            {products.map((product) => (<Product key={product.Id} product={product} />))}
        </>
    );     
}