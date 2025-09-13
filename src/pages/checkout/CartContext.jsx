import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const CartsContext = createContext();

export function CartContext({ children }) {
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
      <CartsContext.Provider value={{ cart, loadCart }}>
        {children}
      </CartsContext.Provider>
    </>
  );
}
