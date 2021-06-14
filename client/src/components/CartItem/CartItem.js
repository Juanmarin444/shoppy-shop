import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
  return (
    <div className="cartitem">

      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.title} />
      </div>

      <div>
        <Link to={`/product/${item.product}`} className="cartitem__name">
          <p>{item.title}</p>
        </Link>
      </div>
      <div>
        <p className="cartitem__price">${item.price}</p>
      </div>

      <div>
        <select className="cartitem__select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
          {[...Array(item.countInStock).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
          ))}
        </select>
      </div>

      <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)} aria-label="remove item">
        <i className="fas fa-trash"></i>
      </button>
      
    </div>
  );
}

export default CartItem;
