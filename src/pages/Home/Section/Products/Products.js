import useItems from "../../../../hooks/useItems";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [items] = useItems([]);
  return (
    <section>
      <h1 className="text-center my-4 text-primary ">OUR PRODUCTS</h1>
      <div className="product-container container">
        {items.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
