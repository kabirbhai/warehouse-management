import React from "react";
import { useItems } from "../../../../hooks/useItems";
const Products = () => {
  const [products] = useItems([]);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div>{product.length}</div>
      ))}
    </div>
  );
};

export default Products;
