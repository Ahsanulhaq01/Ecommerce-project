import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { loadCart } from "../redux/Slice/cartSlice";
import { useDispatch ,useSelector } from "react-redux";
import { useEffect ,useState} from "react";
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadCart());
  } ,[])

  const {carts} = useSelector(state => state.cart)

  let cartQuantity = 0;
  carts.forEach((cartItems) => {
    cartQuantity += cartItems.quantity;
  });

  function searchBarInputValue(e) {
    setSearchValue(e.target.value);
  }
  function handleSearchButton() {
    navigate(`/search=${searchValue}`);
  }
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img
              className="logo"
              src="../../src/assets/images/icons/logo-white.png"
            />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={searchBarInputValue}
          />

          <button className="search-button" onClick={handleSearchButton}>
            <img
              className="search-icon"
              src="../../src/assets/images/icons/search-icon.png"
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img
              className="cart-icon"
              src="../../src/assets/images/icons/cart-icon.png"
            />
            <div className="cart-quantity">{cartQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Header;
