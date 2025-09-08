import { useParams } from "react-router";
import Header from "../../components/Header";
import "./tracking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
function Tracking({ cart }) {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const { orderId, productId } = params;
  useEffect(() => {
    async function getTrackData() {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    }
    getTrackData();
  }, [orderId]);

  if (!order) {
    return <div>loading .....</div>;
  }

  const prod = order.products.find((prod) => prod.productId === productId);
  const totalDeliveryTimeMS = Number(
    prod.estimatedDeliveryTimeMs - order.orderTimeMs
  );
  const timePassedMS = dayjs().valueOf() - order.orderTimeMs;
  let deliveryPercent = Math.floor((timePassedMS / totalDeliveryTimeMS) * Math.floor(Math.random()*10 + 1)/10);
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }

  const isPreparing = deliveryPercent < 33;
  const isShipping = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivering = deliveryPercent === 100;

  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./images/tracking-favicon.png"
      />
      <title>Tracking</title>
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {dayjs(prod.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{prod.product.name}</div>

          <div className="product-info">Quantity: {prod.quantity}</div>
          <img className="product-image" src={`../../${prod.product.image}`} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipping && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivering && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
