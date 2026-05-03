import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";
import "./homepage.css";
import homeFavicon from '../../../public/images/home-favicon.png'
function HomePage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={homeFavicon} />
      <title>Ecommerce Project</title>

      <Header />

      <div className="home-page">
        <ProductGrid />
      </div>
    </>
  );
}

export default HomePage;
