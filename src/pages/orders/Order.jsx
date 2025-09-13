import axios from "axios";
import { useState, useEffect, useContext } from "react";
import OrdersGrid from "./OrdersGrid";
import Header from "../../components/Header";
import "./orders.css";
import { CartsContext } from "../checkout/CartContext";
function Order() {
  const [orders, setOrders] = useState([]);
  const {cart} = useContext(CartsContext)
  useEffect(() => {
    const getorderdata = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getorderdata();
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
