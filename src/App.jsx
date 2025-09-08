import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/orders/Order";
import Tracking from "./pages/tracking/Tracking";
import "./App.css";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => { 
    const getcartdata = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

    getcartdata();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<Checkout cart={cart} />} />
        <Route path="orders" element={<Order cart={cart} />} />
        <Route path="tracking/:orderId/:productId" element={<Tracking cart= {cart} />} />
        <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
