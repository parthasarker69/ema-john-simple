import React from 'react';
import './Product.css'

const Product = ({ product, handleCartButton }) => {
    const { id, img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <div className='product-detaiils'>
                    <div>
                        <h2>{name}</h2>
                        <h3>Price : {price}</h3>
                    </div>
                    <div className='product-more-info'>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings}</p>
                    </div>
                </div>
            </div>
            <button className='cart-button' onClick={() => { handleCartButton(product) }}>Add To Cart</button>
        </div>
    );
};

export default Product;