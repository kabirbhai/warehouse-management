import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [items, setItems] = useItems([]);

  const { name, price, quantity, desc, _id, shipper, img } = items;

  useEffect(() => {
    const url = `https://desolate-waters-59560.herokuapp.com/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [inventoryId, setItems, items]);

  const handleAddToStoke = (event) => {
    event.preventDefault();
    const inputQuantity = parseInt(event.target.addItem.value);
    const updateQuantity = { inputQuantity };
    console.log(updateQuantity);
    const url = `https://desolate-waters-59560.herokuapp.com/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: updateQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  return (
    <section>
      <h1 className="text-primary fw-bold text-center text-uppercase my-2">
        {name}
      </h1>
      <div className="container inventory-container">
        <div>
          <img className="img-fluid rounded" height={200} src={img} alt="" />
        </div>
        <div className="inventory-item">
          <h5>
            Name: <strong className="text-uppercase"> {name}</strong>
          </h5>
          <span>
            Id: <strong className="text-primary"> {_id}</strong>
          </span>
          <h5>
            Quantity: <strong className="text-primary">{quantity}</strong>
          </h5>
          <h5>
            Description: <strong className="text-primary">{desc}</strong>
          </h5>
          <h5>
            Shipper: <strong className="text-primary">{shipper}</strong>
          </h5>
          <h5>
            Price: <strong className="text-primary">{price}</strong>
          </h5>
          <span>
            <button className="btn btn-primary d-block mx-auto">
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
          <input className="btn btn-primary" type="submit" value="add Item" />
        </form>
      </div>
    </section>
  );
};

export default Inventory;
