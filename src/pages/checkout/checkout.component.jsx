import React, { useContext } from "react";

import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CartContext } from "../../providers/cart/cart.provider";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: {cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments:* <br />
        Card Number : 4242 4242 4242 4242 - Expiry : 06/25 - CVV : 123
      </div>
      <StripCheckoutButton price={cartTotal} />
    </div>
  );
};

export default Checkout;