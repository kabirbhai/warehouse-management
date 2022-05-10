import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, img, _id, Price, supplier_name, quantity } =
    product;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <>
      <div className="product ">
        <img height={23} className="img-fluid rounded" src={img} alt="" />
        <div className="product-desc">
          <h2>name: {name}</h2>
          <p>{description}</p>
          <h5>{Price}</h5>
          <h5>{supplier_name}</h5>
          <p>{quantity}</p>
        </div>
        <button
          className="d-block mx-auto update-btn"
          onClick={() => handleUpdate(_id)}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Product;
