import React from "react";
import "./StokeItems.css";
import useItems from "../../../hooks/useItems";
import Item from "./Item/Item";

const StokeItems = () => {
  const [items] = useItems([]);

  return (
    <>
      <h1>Stoke Item</h1>
      <div className="items-container">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </>
  );
};

export default StokeItems;