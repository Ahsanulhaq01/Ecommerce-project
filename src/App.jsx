import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/orders/Order";
import Tracking from "./pages/Tracking";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
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
        <Route path="tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
