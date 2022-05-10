import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [products, setProducts] = useState();

  console.log(products);

  useEffect(() => {
    const url = `http://localhost:5000/items/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [inventoryId]);

  return (
    <>
      <div className="container inventory-container">
        <div>
          <img height={200} src={products?.img} alt="" />
        </div>
        <div className="inventory-item">
          <span>
            Name: <strong> {products?.name}</strong>
          </span>
          <span>
            Quantity: <strong>{products?.quantity}</strong>
          </span>
          <span>
            Description: <strong>{products?.description}</strong>
          </span>
          <span>
            Shipper: <strong>{products?.supplier_name}</strong>
          </span>
          <span>
            Price: <strong>{products?.Price}</strong>
          </span>
          <span>id: {products?._id}</span>
        </div>
      </div>
      <div className="container mt-4 text-center">
        <h1>Add to stoke</h1>
        <form>
          <input type="text" placeholder="add to stoke" />
        </form>
      </div>
      <hr />
    </>
  );
};

export default Inventory;
