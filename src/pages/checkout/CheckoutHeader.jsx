import { Link, NavLink } from 'react-router';
import './checkoutHeader.css'
function CheckoutHeader(){
    return(
        <>
        <div class="checkout-header">
        <div class="header-content">
          <div class="checkout-header-left-section">
            <Link to="/">
              <img class="logo" src="./src/assets/images/icons/logo.png" />
              <img class="mobile-logo" src="./src/assets/images/icons/mobile-logo.png" />
            </Link>
          </div>

          <div class="checkout-header-middle-section">
            Checkout (
            <Link class="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div class="checkout-header-right-section">
            <img src="./src/assets/images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
        </>
    )
}

export default CheckoutHeader;