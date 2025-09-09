import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import { formatMoney } from "../../utils/money";
import "./homepage.css";
import ProductGrid from "./ProductGrid";
function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const url = "/api/products/";
  const searchUrl = `/api/products?search=${search}`;
  const gethomedata = async (url) => {
    const response = await axios.get(url);
    setProducts(response.data);
  };

  useEffect(() => {
    if (search) {
      gethomedata(searchUrl);
    } else {
      gethomedata(url);
    }
  }, [search]);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
