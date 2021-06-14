import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { cartItems } = useSelector(state => state.cart);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <h2>Shoppy Shop</h2>
      </div>
      <ul className="navbar__links">
        <li><Link to='/'>Shop</Link></li>
        <li>
          <Link to='/cart' className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
