import useItems from "../../../../hooks/useItems";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [items] = useItems([]);
  return (
    <>
      <div className="product-container container">
        {items.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <hr />
    </>
  );
};

export default Products;
