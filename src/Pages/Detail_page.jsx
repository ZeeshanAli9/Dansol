import React, { useLayoutEffect } from "react";

import RelatedProduct from "../Components/product/RelatedProduct";
import Productliked from "../Components/product/Productliked";
import ProductDetail from "../Components/product/ProductDetail";

function Detailpage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductDetail />
      <RelatedProduct />
      <Productliked />
    </div>
  );
}

export default Detailpage;
