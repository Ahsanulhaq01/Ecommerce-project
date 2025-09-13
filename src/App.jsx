import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/orders/Order";
import Tracking from "./pages/tracking/Tracking";
import "./App.css";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
function App() {
  return (
    <>
    
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="orders" element={<Order/>} />
        <Route
          path="tracking/:orderId/:productId"
          element={<Tracking/>}
        />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      
    </>
  );
}

export default App;
