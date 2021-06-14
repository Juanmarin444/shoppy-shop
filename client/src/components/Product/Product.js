import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({imageUrl, title, price, description, productId}) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={title}/>
      <div className="product__info">
        <p className="info__name">{title}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <p><Link to={`/product/${productId}`} className="info__button">View</Link></p>
      </div>
    </div>
  );
}

export default Product;
