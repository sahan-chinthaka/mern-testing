import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartItems } = cartContext;

  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <div className="quantity-control">
                <Button variant="outline-primary" >-</Button>
                <span>{item.quantity}</span>
                <Button variant="outline-primary" >+</Button>
              </div>
              <Button variant="outline-danger">Remove</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <LinkContainer to="/checkout">
          <Button variant="success">Proceed to Checkout</Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default Cart;
