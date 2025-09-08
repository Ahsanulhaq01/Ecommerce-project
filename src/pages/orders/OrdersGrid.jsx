import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { formatMoney } from "../../utils/money";
import OrdersHeader from "./OrdersHeader";

function OrdersGrid({ orders }) {
  return (
    <>
      <div className="orders-grid">
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
             <OrdersHeader order = {order} />

              <div className="order-details-grid">
                {order.products.map((orderProduct) => {
                  return (
                    <Fragment key={orderProduct.product.id}>
                      <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                      </div>

                      <div className="product-details">
                        <div className="product-name">
                          {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                          Arriving on:{" "}
                          {dayjs(orderProduct.estimatedDeliveryTimeMs).format(
                            "MMMM D"
                          )}
                        </div>
                        <div className="product-quantity">
                          Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                          <img
                            className="buy-again-icon"
                            src="./src/assets/images/icons/buy-again.png"
                          />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>

                      <div className="product-actions">
                        <Link to="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrdersGrid;
