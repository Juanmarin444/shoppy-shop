import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProductDetailsActions } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(store => store.getProductDetails);

  useEffect(()=>{
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetailsActions(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  }

  return (
    <div className="productscreen">
      { loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.title}/>
            </div>
            <div className="left__info">
              <p className="left__name">{product.title}</p>
              <p>Price:<span>${product.price}</span></p>
              <p>Description:<span>{product.description}</span></p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>Price: <span>${product.price}</span></p>
              <p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
                </select>
              </p>
              <p><button type="button" onClick={addToCartHandler}>Add To Cart</button></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
