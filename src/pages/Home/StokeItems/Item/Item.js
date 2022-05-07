import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  const { name, _id, img, description, Price } = props.item;
  const navigate = useNavigate();

  const navigateItemDetail = (id) => {
    navigate(`/itemDetail/${id}`);
  };
  return (
    <div className="item-container">
      <img className="img-fluid" src={img} alt="" />
      <div>
        {" "}
        <h1 className="text-center">{name}</h1>
        <p className="text-center">{description}</p>
        <h6 className="text-center">price: {Price}</h6>
        <button
          onClick={() => navigateItemDetail(_id)}
          className="d-block mx-auto"
        >
          add to bag
        </button>
      </div>
    </div>
  );
};

export default Item;
