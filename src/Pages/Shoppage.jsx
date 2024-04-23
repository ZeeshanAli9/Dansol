import React, { useLayoutEffect } from "react";
import ProductShop from "../Components/product/ProductShop";

function Shoppage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductShop />
    </div>
  );
}

export default Shoppage;
