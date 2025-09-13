import { useState ,useContext} from "react";
import Header from "../../components/Header";
import { HomeContext ,productContext } from "./HomeContext";
import { formatMoney } from "../../utils/money";
import "./homepage.css";
import ProductGrid from "./ProductGrid";
function HomePage({ cart, loadCart }) {
  const {products} = useContext(productContext)

  
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
