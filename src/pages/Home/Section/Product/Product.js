import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, desc, img, _id, price, shipper, quantity } = product;
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <>
      <section className="inventory-container">
        <Card className="product-desc border-0 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h2 className="text-center fs-3 text-primary">{name}</h2>
            </Card.Title>
            <Card.Text>
              <p>
                Price:{" "}
                <small>
                  <strong>{price}</strong>
                </small>
              </p>
              <p>
                Shipper: <strong>{shipper}</strong>
              </p>
              <p>
                Quantity: <strong>{quantity}</strong>
              </p>
              <p>
                <small>{desc}</small>
              </p>
            </Card.Text>
          </Card.Body>
          <button
            className="d-block mx-auto update-btn"
            onClick={() => handleUpdate(_id)}
          >
            Update
          </button>
        </Card>
      </section>
    </>
  );
};

export default Product;
