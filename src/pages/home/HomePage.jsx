import { useContext} from "react";
import Header from "../../components/Header";
import {productContext } from "./HomeContext";
import { CartsContext } from "../checkout/CartContext";
import "./homepage.css";
import ProductGrid from "./ProductGrid";
function HomePage() {
  const {products} = useContext(productContext)
   const {cart , loadCart} = useContext(CartsContext)

  
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header />

      <div className="home-page">
        <ProductGrid  loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
