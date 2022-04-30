import React from "react";

const Item = (props) => {
  const { name, img, description, price } = props.item;

  return (
    <div>
      <h1>{name}</h1>
      <img height={60} src={img} alt="" />
      <p>{description}</p>
      <h1>{price}</h1>
    </div>
  );
};

export default Item;
