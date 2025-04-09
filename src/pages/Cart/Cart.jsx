import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import useCart from '../../hooks/useCart';
import './Cart.css';

const Cart = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link to="/catalog" className="back-link">
          <Icon name="arrow-left" size={20} />
          Continue Shopping
        </Link>
        <h2>Your Cart ({totalItems} items)</h2>
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/catalog">
            <Button>Browse Products</Button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={(newQty) => updateQuantity(item.id, newQty)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-section">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              className="checkout-button"
              onClick={() => alert('Proceeding to checkout')}
            >
              Proceed to Checkout
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;