import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fec-inventory-api.herokuapp.com/product-info")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <div className="grid grid-cols-2 gap-3">
                {products?.map((product) => (
                    <Product key={product?.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;
