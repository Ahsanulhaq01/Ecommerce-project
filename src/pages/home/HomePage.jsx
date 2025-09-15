import { useContext } from "react";
import Header from "../../components/Header";
import { CartsContext } from "../checkout/CartContext";
import ProductGrid from "./ProductGrid";
import "./homepage.css";
function HomePage() {
  const {loadCart} = useContext(CartsContext);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header />

      <div className="home-page">
        <ProductGrid loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
