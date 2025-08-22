import {NavLink } from 'react-router';
import './Header.css'
function Header({cart}){
  let cartQuantity = 0;
  cart.forEach((cartItems)=>{
    cartQuantity += cartItems.quantity
  })

    return(
        <>
        <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src="./src/assets/images/icons/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="./src/assets/images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="./src/assets/images/icons/cart-icon.png" />
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
        </>
    )
}
export default Header;