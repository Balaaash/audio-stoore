import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <header>
      <Link to="/" className="logo">QPICK</Link>
      <div className="icons">
        {/* … */}
        <Link to="/cart" className="cart-icon">
          <CartIcon className="icon" />
          {total > 0 && <span className="cart-count">{total}</span>}
        </Link>
      </div>
    </header>
  );
};


