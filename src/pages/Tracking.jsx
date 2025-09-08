// import { useParams } from "react-router";
// import Header from "../components/Header";
// import "./tracking.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { prefetchDNS } from "react-dom";
// function Tracking({cart}) {

//   const [order, setOrder] = useState(null)
//   const params = useParams();
//   const {orderId , productId} = params;

//   useEffect(()=>{
//     async function getTrackData(){
//       const response = await axios.get(`/api/orders/${orderId}?expand=products`);
//       setOrder(response.data)
//       console.log(response.data.products.productsId)
//       console.log(productId)
//     }
//     getTrackData();
//   },[])

//   const prod = order.products.find(prod => prod.productId === productId);
//   console.log(prod)
//   return (
//     <>
   
//     <link rel="icon" type="image/svg+xml" href="./images/tracking-favicon.png" />
//       <title>Tracking</title>
//       <Header cart={cart}/>
//       <div className="tracking-page">
//         <div className="order-tracking">
//           <a className="back-to-orders-link link-primary" href="orders">
//             View all orders
//           </a>

//           <div className="delivery-date">Arriving on Monday, June 13</div>

//           <div className="product-info">
//             Black and Gray Athletic Cotton Socks - 6 Pairs
//           </div>

//           <div className="product-info">Quantity: 1</div>
//           <img
//             className="product-image"
//             src="../../images/products/athletic-cotton-socks-6-pairs.jpg"
//           />

//           <div className="progress-labels-container">
//             <div className="progress-label">Preparing</div>
//             <div className="progress-label current-status">Shipped</div>
//             <div className="progress-label">Delivered</div>
//           </div>

//           <div className="progress-bar-container">
//             <div className="progress-bar"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Tracking;

import { useParams } from "react-router";
import Header from "../components/Header";
import "./tracking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

function Tracking({ cart }) {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const { orderId, productId } = params;

  useEffect(() => {
    async function getTrackData() {
      try {
        const response = await axios.get(`/api/orders/${orderId}?expand=products`);
        setOrder(response.data);

        // Debugging logs
        // console.log("Products:", response.data.products);
        // console.log("Selected productId from params:", productId);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }
    getTrackData();

    // Set page title
    document.title = "Tracking";
  }, [orderId, productId]);

  // Guard: wait until order is fetched
  if (!order) {
    return <div>Loading...</div>;
  }

  // Find the specific product in this order
  const prod = order.products.find((p) => p.productId === productId);
  console.log(prod)

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./images/tracking-favicon.png" />
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">{dayjs(prod.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</div>

          {prod ? (
            <>
              <div className="product-info">{prod.product.name}</div>
              <div className="product-info">Quantity: {prod.quantity}</div>
              <img
                className="product-image"
                src={`../../public/${prod.product.image}`}
              />
            </>
          ) : (
            <div className="product-info">Product not found in this order.</div>
          )}

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;

