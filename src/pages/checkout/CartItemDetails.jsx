import axios from "axios";
import { formatMoney } from "../../utils/money";
import "./cart-item-details.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadCart} from "../../redux/Slice/cartSlice";
import { deleteCart } from "../../redux/Slice/cartDeleteSlice";

function CartItemDetails({ cartItem}) {
  const [isUpdated, setIsUpdated] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();
  async function deleteCartItem() {
    dispatch(deleteCart(cartItem.productId))
    dispatch(loadCart())
  }

  async function updatedCartItem() {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });
   dispatch(loadCart())
    setIsUpdated(false);
    console.log("hello pakistan");
  }
  function toggleIsUpdated() {
    setIsUpdated(true);
    if (isUpdated) {
      updatedCartItem();
    }
  }
  function updatedInputValue(e) {
    setQuantity(e.target.value);
  }

  function handlekeyDown(event) {
    if (event.key == "Enter") {
      updatedCartItem();
    } else if (event.key == "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdated(false);
    }
  }
  return (
    <>
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdated ? (
              <input
                type="text"
                className="update-product-quantity"
                value={quantity}
                onChange={updatedInputValue}
                onKeyDown={handlekeyDown}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={toggleIsUpdated}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
