import React from "react";
import "./Cart.css";
import EffectivePython from "../../resources/effective engineer.png";
import Arrow from "../../resources/arrow.png";
import SCart from "../../resources/Union.png";
import YCart from "../../resources/cart.png";

function Cart({ showCart }) {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__nav" onClick={showCart}>
          <img src={Arrow} alt="arrow" /> Back
        </div>
        <div className="cart__icon">
          Your Cart <img src={YCart} alt="cart" />
        </div>
      </div>
      <div className="cart__layout">
        <div className="cart__body">
          <div className="cart__item">
            <div className="cart__img">
              <img src={EffectivePython} alt="cart_img" />
            </div>
            <div className="wrapper">
              <div className="cart__name">
                <h2>The Effective Engineer</h2>
                <p>Edmod Lau</p>
              </div>
              <div className="remove__item">
                <p>Remove</p>
              </div>
            </div>
          </div>
          <div className="cart__right">
            <div className="cart__initial">
              <p>$29.99</p>
            </div>
            <div className="buttons">
              <button>-</button> <p className="count">1</p> <button>+</button>
            </div>
            <div className="next__price">$59.99</div>
          </div>
        </div>
      </div>

      <div className="cart__checkout">
        <p className="sub"> Subtotal</p>
        <p className="total">$94.76</p>
      </div>

      <div className="button__checkout">
        <button>
          <img src={SCart} alt="cart" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
