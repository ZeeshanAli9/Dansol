import React, { useLayoutEffect } from "react";
import CartDetail from "../Components/Cart/CartDetail";

function Cart() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CartDetail />
    </div>
  );
}

export default Cart;
