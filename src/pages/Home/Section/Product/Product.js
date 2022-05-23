import React from "react";
import { Card } from "react-bootstrap";
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
      <section>
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
                  <strong>{Price}</strong>
                </small>
              </p>
              <p>
                Shipper: <strong>{supplier_name}</strong>
              </p>
              <p>Desc: {description}</p>
              <p>
                Quantity: <strong>{quantity}</strong>
              </p>
            </Card.Text>
            <button
              className="d-block mx-auto update-btn"
              onClick={() => handleUpdate(_id)}
            >
              Update
            </button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Product;
