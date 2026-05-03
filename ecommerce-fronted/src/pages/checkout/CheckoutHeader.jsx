import { Link } from "react-router";
import "./checkoutHeader.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import logoPng from '../../assets/images/icons/logo.png'
import mobileLogoPng from '../../assets/images/icons/mobile-logo.png'
import checkoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png'
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
              <img className="logo" src={logoPng} />
              <img
                className="mobile-logo"
                src={mobileLogoPng}
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
            <img src={checkoutLockIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHeader;
