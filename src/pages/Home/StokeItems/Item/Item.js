import React from "react";
import "./Item.css";

const Item = (props) => {
  const { name, img, description, price } = props.item;

  return (
    <div className="item-container">
      <img className="img-fluid" src={img} alt="" />
      <div>
        {" "}
        <h1 className="text-center">{name}</h1>
        <p className="text-center">{description}</p>
        <h1>{price}</h1>
        <button className="d-block mx-auto">Buy now</button>
      </div>
    </div>
  );
};

export default Item;
