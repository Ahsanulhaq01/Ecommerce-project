import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const productContext = createContext();

export function HomeContext({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductsData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getProductsData();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
}
