import { Link } from "react-router";
import "./checkoutHeader.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function CheckoutHeader() {
  const {carts} = useSelector(state => state.cart)
  useEffect(()=>{
    } , [carts])
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="./src/assets/images/icons/logo.png" />
              <img
                className="mobile-logo"
                src="./src/assets/images/icons/mobile-logo.png"
              />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {`${carts?.length} items`}
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="./src/assets/images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHeader;
