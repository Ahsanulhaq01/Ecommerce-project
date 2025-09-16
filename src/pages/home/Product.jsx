import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { useDispatch } from "react-redux";
import { loadCart , addProductToCart} from "../../redux/Slice/cartSlice";
function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedMsg, setShowAddedMsg] = useState(false);
  const dispatch = useDispatch();
  
  async function addToCart() {
    const id = product.id;
    dispatch(addProductToCart({id , quantity}));
    dispatch(loadCart());
    setShowAddedMsg(true);
    setTimeout(() => {
      setShowAddedMsg(false);
    }, 2000);
  }
  function selectQuantity(e) {
    const selectedQuantity = Number(e.target.value);
    setQuantity(selectedQuantity);
  }
  return (
    <>
      <div className="product-container" data-testid="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            data-testid="product-image"
            src={product.image}
          />
        </div>

        <div className="product-name limit-text-to-2-lines">{product.name}</div>

        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            data-testid="product-rating-stars-image"
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
          />
          <div className="product-rating-count link-primary">
            {product.rating.count}
          </div>
        </div>

        <div className="product-price">{formatMoney(product.priceCents)}</div>

        <div className="product-quantity-container">
          <select
            value={quantity}
            onChange={selectQuantity}
            data-testid="select-product-quantity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="product-spacer"></div>

        <div
          className="added-to-cart"
          style={{ opacity: showAddedMsg ? 1 : 0 }}
        >
          <img src="images/icons/checkmark.png" />
          Added
        </div>

        <button
          className="add-to-cart-button button-primary"
          data-testid="add-to-cart-button"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Product;
