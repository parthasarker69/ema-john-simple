import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const handleCartButton = (product) => {
        setCart([...cart, product]);
        console.log(cart.length);
    }

    return (
        <div className="shop">
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCartButton={handleCartButton}
                    ></Product>)
                }
            </div>
            <div className='cart-details'>
                <h1>This is my cart details center</h1>
                <p>Total selecteditems : {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;