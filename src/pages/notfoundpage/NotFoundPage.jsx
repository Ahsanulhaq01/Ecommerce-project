import { useContext } from "react";
import Header from "../../components/Header";
import './not-found-page.css'
import { CartsContext } from "../checkout/CartContext";

function NotFoundPage(){
    const {cart} = useContext(CartsContext);
    return(
        <>
        <Header/>

        <div className="container">
            
            <h1>404  </h1>
            <h2> Page not found  </h2>
            
        </div>
        </>
    )
}
export default NotFoundPage;