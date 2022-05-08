import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item, handleAddToBag }) => {
  const { name, quantity, supplier_name, img, description, Price } = item;
  // const navigate = useNavigate();

  // const navigateItemDetail = (id) => {
  //   navigate(`/itemDetail/${id}`);
  // };
  return (
    <div className="item-container">
      <div className="item-img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        {" "}
        <h1 className="text-center">{name}</h1>
        <p className="text-center">{description}</p>
        <p className="text-center">{quantity}</p>
        <p className="text-center">{supplier_name}</p>
        <h6 className="text-center">price: {Price}</h6>
        <button onClick={() => handleAddToBag(item)}>add to bag</button>
      </div>
    </div>
  );
};

export default Item;
