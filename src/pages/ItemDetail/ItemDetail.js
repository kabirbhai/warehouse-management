import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { ID } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/items/${ID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [ID]);

  return (
    <div>
      <h1>Item details {item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
