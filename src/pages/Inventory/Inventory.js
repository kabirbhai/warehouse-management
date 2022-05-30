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

  //decrease quantity
  const handleDecreaseQuantity = (decrease) => {
    // const count = minus - 1;
    // const update = { count: count };
    // const url = `http://localhost:5000/items/${inventoryId}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(update),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setItems(parseInt(data.count)));
  };

  //   handleAddToStoke
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
            <button onClick={() => handleDecreaseQuantity()}>Delivered</button>
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
