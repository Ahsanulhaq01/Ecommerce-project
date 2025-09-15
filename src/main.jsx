// import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { CartContext } from "./pages/checkout/CartContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store ={store}>
    <BrowserRouter>
      <CartContext>
          <App />
      </CartContext>
    </BrowserRouter>
  </Provider>
);
