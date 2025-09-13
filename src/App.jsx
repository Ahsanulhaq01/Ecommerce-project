import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/orders/Order";
import Tracking from "./pages/tracking/Tracking";
import { HomeContext } from "./pages/home/HomeContext";
import "./App.css";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
    <HomeContext>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<Order cart={cart} />} />
        <Route
          path="tracking/:orderId/:productId"
          element={<Tracking cart={cart} />}
        />
        <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
      </HomeContext>
    </>
  );
}

export default App;
