import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [products, setProducts] = useState({});
  const { name, Price, quantity, description, _id, supplier_name, img } =
    products;

  useEffect(() => {
    const url = `http://localhost:5000/items/${inventoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [inventoryId]);

  //descrie
  const handleQuantity = (minus) => {
    const count = minus - 1;
    const update = { count };
    const url = `http://localhost:5000/items/${inventoryId}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => setProducts(parseInt(data.count)));
  };

  //   handleAddToStoke
  const handleAddToStoke = (e) => {
    e.preventDefault();
    const inputQuantity = e.target.addItem.value;
    const url = `http://localhost:5000/items/${products._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: inputQuantity }),
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts({
          ...products,
          quantity: products.quantity + parseInt(inputQuantity),
        })
      );
  };

  return (
    <>
      <div className="container inventory-container">
        <div>
          <img height={200} src={img} alt="" />
        </div>
        <div className="inventory-item">
          <span>
            Name: <strong> {name}</strong>
          </span>
          <span>
            Quantity: <strong>{quantity}</strong>
          </span>
          <span>
            Description: <strong>{description}</strong>
          </span>
          <span>
            Shipper: <strong>{supplier_name}</strong>
          </span>
          <span>
            Price: <strong>{Price}</strong>
          </span>
          <span>
            id:{" "}
            <button onClick={() => handleQuantity(inventoryId.quantity)}>
              Delivered
            </button>
          </span>
        </div>
      </div>
      <div className="container mt-4 text-center">
        <h1>Add to stoke</h1>
        <form onSubmit={handleAddToStoke}>
          <input
            className="mb-3"
            type="text"
            name="addItem"
            placeholder="Add to stoke"
          />
          <br />
          <input type="submit" value="add Item" />
        </form>
      </div>
      <hr />
    </>
  );
};

export default Inventory;
