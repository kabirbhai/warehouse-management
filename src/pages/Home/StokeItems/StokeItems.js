import React, { useState } from "react";
import "./StokeItems.css";
import useItems from "../../../hooks/useItems";
import Item from "./Item/Item";

const StokeItems = () => {
  const [items] = useItems([]);
  const [bag, setBag] = useState([]);
  console.log(typeof bag);
  console.log(bag);

  const handleAddToBag = (item) => {
    const newBag = [...bag, item];
    setBag(newBag);
  };

  return (
    <>
      <h1 className="text-center my-4 text-danger">AVAILABLE PRODUCTS</h1>
      <div className="items-container  container">
        {items.map((item) => (
          <Item
            key={item._id}
            handleAddToBag={handleAddToBag}
            item={item}
          ></Item>
        ))}
      </div>
    </>
  );
};

export default StokeItems;
