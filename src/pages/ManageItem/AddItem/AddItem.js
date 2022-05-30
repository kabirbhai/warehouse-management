import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (e) => {
    e.preventDefault();
    const items = {
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      review: e.target.review.value,
      img: e.target.img.value,
      email: e.target.name.value,
    };
  };

  return (
    <section className="cont mb-3ainer w-50 mx-auto">
      <h1 className="text-center text-primary my-4">ADD ITEM</h1>
      <form onSubmit={handleAddItem}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-3"
            id="itemName"
            aria-describedby="emailHelp"
            name="name"
            value={user?.email}
            placeholder="email"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="itemName"
            aria-describedby="emailHelp"
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="ItemPrice"
            aria-describedby="emailHelp"
            placeholder="Price"
            name="price"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="ItemShipper"
            aria-describedby="emailHelp"
            placeholder="Shipper"
            name="shipper"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="ItemQuantity"
            aria-describedby="emailHelp"
            placeholder="Quantity"
            name="quantity"
          />
          <input
            type="text"
            className="form-control mb-3"
            id="ItemDesc"
            aria-describedby="emailHelp"
            placeholder="Review"
            name="review"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Image"
            name="img"
          />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto my-3">
          Add Item
        </button>
      </form>
    </section>
  );
};

export default AddItem;
