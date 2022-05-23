import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [items, setItems] = useItems([]);
  const { name, price, quantity, desc, _id, shipper, img } = items;

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [inventoryId, setItems, items]);

  //descrie
  const handleQuantity = (minus) => {
    const count = minus - 1;
    const update = { count: count };
    const url = `http://localhost:5000/items/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => setItems(parseInt(data.count)));
  };

  //   handleAddToStoke
  const handleAddToStoke = (e) => {
    e.preventDefault();
    const inputQuantity = e.target.addItem.value;
    const url = `http://localhost:5000/items/${items._id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: inputQuantity }),
    })
      .then((res) => res.json())
      .then((data) =>
        setItems({
          ...items,
          quantity: items.quantity + parseInt(inputQuantity),
        })
      );
  };

  return (
    <section>
      <h1 className="text-danger text-center text-uppercase my-2">{name}</h1>
      <div className="container inventory-container">
        <div>
          <img className="img-fluid rounded" height={200} src={img} alt="" />
        </div>
        <div className="inventory-item">
          <span>
            Name: <strong className="text-uppercase"> {name}</strong>
          </span>
          <span>
            Id: <strong> {_id}</strong>
          </span>
          <span>
            Quantity: <strong>{quantity}</strong>
          </span>
          <span>
            Description: <strong>{desc}</strong>
          </span>
          <span>
            Shipper: <strong>{shipper}</strong>
          </span>
          <span>
            Price: <strong>{price}</strong>
          </span>
          <span>
            <button onClick={() => handleQuantity(inventoryId?.quantity)}>
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
    </section>
  );
};

export default Inventory;
