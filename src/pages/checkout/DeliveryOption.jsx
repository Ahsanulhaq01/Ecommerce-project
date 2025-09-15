import { useContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { CartsContext } from "./CartContext";

function DeliveryOption({ deliveryOptions, cartItem}) {
  const {loadCart} = useContext(CartsContext)
  return (
    <>
      <div className="delivery-options">
        <div className="delivery-options-title">Choose a delivery option:</div>
        {deliveryOptions.map((deliveryOption) => {
          let priceString = "Free Shipping";
          if (deliveryOption.priceCents > 0) {
            priceString = `${formatMoney(deliveryOption.priceCents)}-Shipping`;
          }
          async function updateDeliveryOptions() {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
              deliveryOptionId: deliveryOption.id,
            });
            await loadCart();
          }
          return (
            <div
              key={deliveryOption.id}
              className="delivery-option"
              onClick={updateDeliveryOptions}
            >
              <input
                type="radio"
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`}
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                onChange={() => {}}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DeliveryOption;
