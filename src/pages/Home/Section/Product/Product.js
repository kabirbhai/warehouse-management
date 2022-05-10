import React from "react";

const Product = ({ product }) => {
  const { name, description, img, _id, Price, supplier_name, quantity } =
    product;
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
        <button className="d-block mx-auto update-btn">Update</button>
      </div>
    </>
  );
};

export default Product;
