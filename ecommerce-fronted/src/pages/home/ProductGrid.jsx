import Product from "./Product";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getProductData } from "../../redux/Slice/productSlice";
function ProductGrid() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductData())
  } ,[dispatch])
  const {isloading ,products , error} = useSelector(state => state.products)
  return (
    <>
      {isloading &&  <h1>Loading....
        </h1>}

        {products && <div className="products-grid">
        {products.map((product) => {
          return (
            <Product key={product.id} product={product}/>
          );
        })}
      </div>}
      {error && <p>you are getting the error</p>}
    </>
  );
  
}

export default ProductGrid;
