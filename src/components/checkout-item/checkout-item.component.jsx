import React, { useContext } from "react";

import './checkout-item.styles.scss';

import { CartContext } from "../../providers/cart/cart.provider";

const CheckoutItem = ({ item }) => {
    
    const { imageUrl, name, price, quantity } = item;
    const { addItem, removeItem, clearItem } = useContext(CartContext);
    
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(item)}>&#10005;</span>
    </div>
)};

export default CheckoutItem;