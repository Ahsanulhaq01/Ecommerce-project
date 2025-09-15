import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";
import "./homepage.css";
function HomePage() {
 
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header />

      <div className="home-page">
        <ProductGrid />
      </div>
    </>
  );
}

export default HomePage;
