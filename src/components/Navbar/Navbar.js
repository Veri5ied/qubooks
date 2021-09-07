import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../resources/logo.png";
import Magnifier from "../../resources/search.png";
import ICart from "../../resources/cart.png";
import Books from "../../resources/books-index.png";
import Cart from "../../pages/Cart/Cart";

function Navbar() {
  const [cart, setCart] = useState(false);

  const showCart = () => setCart(!cart);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__title">
          <h2>Quidax Books</h2>
          <p>A flimsy book company</p>
        </div>
      </div>
      <div className="navbar__center">
        <div className="navbar__search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search books, genres, authors, etc."
          />{" "}
          <span className="search__icon">
            <img src={Magnifier} alt="icon" />
          </span>
        </div>
      </div>
      <div className="navbar__right">
        <div className="library">
          <img src={Books} alt="library" />
        </div>
        <div className="mycart">
          <img src={ICart} alt="cart" onClick={showCart} />
        </div>
        <nav className={cart ? 'nav-menu active' : 'nav-menu'}>
          <div className="navbar-toggle">
            <Cart showCart={showCart}/>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
