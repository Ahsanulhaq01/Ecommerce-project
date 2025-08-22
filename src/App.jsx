import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items/").then((response) => {
      setCarts(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage carts={carts} />} />
        <Route path="checkout" element={<Checkout carts={carts} />} />
        <Route path="orders" element={<Order />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
