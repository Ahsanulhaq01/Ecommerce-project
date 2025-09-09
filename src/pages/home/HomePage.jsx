import { use, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { formatMoney } from "../../utils/money";
import "./homepage.css";
import ProductGrid from "./ProductGrid";
function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const gethomedata = async () => {
    const response = await axios.get("/api/products/");
      setProducts(response.data);
    };
    gethomedata();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
}

export default HomePage;
