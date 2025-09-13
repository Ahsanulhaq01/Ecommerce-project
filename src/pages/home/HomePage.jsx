import { useEffect, useState ,useContext} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import { HomeContext ,productContext } from "./HomeContext";
import { formatMoney } from "../../utils/money";
import "./homepage.css";
import ProductGrid from "./ProductGrid";
function HomePage({ cart, loadCart }) {
  const {products} = useContext(productContext)
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  // const url = "/api/products/";
  const searchUrl = `/api/products?search=${search}`;
  const gethomedata = async (url) => {
    const response = await axios.get(url);
    setSearchProducts(response.data)
  };

  useEffect(() => {
    if (search) {
      gethomedata(searchUrl);
    } 
  }, [search]);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid  loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
