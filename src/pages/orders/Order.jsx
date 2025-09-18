import {  useEffect } from "react";
import OrdersGrid from "./OrdersGrid";
import Header from "../../components/Header";
import "./orders.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/Slice/orderSlice";
function Order() {
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.orders);
  useEffect(() => {
    
    dispatch(getOrders())
  }, []);
  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./images/orders-favicon.png"
      />
      <title>Orders</title>

      <Header />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}

export default Order;
