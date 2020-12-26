import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div class="checkout">
      <div class="checkout__left">
        <div>
          <h2 class="checkout__title">
            <strong>Your Shopping Basket</strong>
          </h2>
        </div>
      </div>

      <div class="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
