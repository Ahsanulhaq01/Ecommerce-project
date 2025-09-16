import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { PaymentSummary } from "./PaymentSummary";
import CartItemDetails from "./CartItemDetails";
import CheckoutHeader from "./CheckoutHeader";
import DeliveryOption from "./DeliveryOption";
import { useDispatch , useSelector } from "react-redux";
import "./checkout.css";
import {loadCart } from "../../redux/Slice/cartSlice";

function Checkout() {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadCart())
  },[dispatch])

  const {carts} = useSelector(state=>state.cart)

  // const loadPaymentSummary = async () => {
  //     const response = await axios.get("/api/payment-summary");
  //     setPaymentSummary(response.data);
  //   };
  useEffect(() => {
    const loadPaymentSummary = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    loadPaymentSummary();
  }, [carts]);
  useEffect(() => {
    const getdeliveryoptiondata = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };
    getdeliveryoptiondata();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="../images/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions.length > 0 &&
              carts.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find(
                  (deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  }
                );
                return (
                  <div key={cartItem.id} className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date:
                      {dayjs(
                        selectedDeliveryOption.estimatedDeliveryTimeMs
                      ).format("dddd, MMMM D")}
                    </div>

                    <div className="cart-item-details-grid">
                      <img
                        className="product-image"
                        src={cartItem.product.image}
                      />
                      <CartItemDetails
                        cartItem={cartItem}
                      
                      />
                      <DeliveryOption
                        deliveryOptions={deliveryOptions}
                        cartItem={cartItem}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          <PaymentSummary paymentSummary={paymentSummary}  />
        </div>
      </div>
    </>
  );
}

export default Checkout;
