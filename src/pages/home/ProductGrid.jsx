import Product from "./Product";
import { productContext } from "./HomeContext";
import { useContext } from "react";
function ProductGrid({loadCart}){

  const {products} = useContext(productContext)
    return(
        <>
        <div className="products-grid">
                  {products.map((product) => {
                    return (
                    <Product key={product.id} product={product} loadCart={loadCart}/>
                    );
                    
                  })}
                </div>
        </>
    )
}

export default ProductGrid;