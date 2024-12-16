import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartDropdownItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartDropdownItem key={item.id} item={item} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;