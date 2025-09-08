import { NavLink } from "react-router-dom";
import {formatMoney} from '../../utils/money'
import CheckoutHeader from "./CheckoutHeader";
import "./checkout.css";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import { PaymentSummary } from "./PaymentSummary";
import CartItemDetails from "./CartItemDetails";

function Checkout({cart}) {
  const [deliveryOptions , setDeliveryOptions] = useState([]);
  const [paymentSummary , setPaymentSummary] = useState(null)
  useEffect(()=>{
    const getdeliveryoptiondata = async()=>{
const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    setDeliveryOptions(response.data);

    }
    
    const getpaymentsummarydata = async()=>{
      const response = await axios.get('/api/payment-summary')
    setPaymentSummary(response.data)
    }
  getdeliveryoptiondata();
  getpaymentsummarydata();

  },[])
  
  return (
    <>
    <link rel="icon" type="image/svg+xml" href="../images/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

    
        <div className="checkout-grid">
          <div className="order-summary">    
          {deliveryOptions.length > 0 &&cart.map((cartItem)=>{
            const selectedDeliveryOption = deliveryOptions.find((deliveryOption)=>{
              return deliveryOption.id === cartItem.deliveryOptionId;
            })
            return(
               <div key={cartItem.id} className="cart-item-container">
              <div className="delivery-date">Delivery date:
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                 </div>

              <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product.image}
                />
                <CartItemDetails cartItem = {cartItem}/>
                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                {deliveryOptions.map((deliveryOption)=>{

                  let priceString = 'Free Shipping';
                  if(deliveryOption.priceCents>0){
                    priceString = `${formatMoney(deliveryOption.priceCents)}-Shipping`
                  }
                  return(
                    <div key ={deliveryOption.id} className="delivery-option">
                    <input
                      type="radio"
                      className="delivery-option-input"
                      name={`delivery-option-${cartItem.productId}`}
                      checked = {deliveryOption.id === cartItem.deliveryOptionId}
                    />
                    <div>
                      <div className="delivery-option-date">{dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</div>
                      <div className="delivery-option-price">{priceString}</div>
                    </div>
                  </div>
                  )
                })}
                </div>
              </div>
            </div>
            );
          }) }       

           
          </div>

          <PaymentSummary paymentSummary = {paymentSummary}/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
