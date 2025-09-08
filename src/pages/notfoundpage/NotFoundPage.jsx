import Header from "../../components/Header";
import './not-found-page.css'

function NotFoundPage({cart}){
    return(
        <>
        <Header cart={cart} />

        <div className="container">
            
            <h1>404  </h1>
            <h2> Page not found  </h2>
            
        </div>
        </>
    )
}
export default NotFoundPage;