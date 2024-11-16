import { CDN_ULR } from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_ULR + resData.info.cloudinaryImageId}
      />
      <h4 className="name">{resData.info.name}</h4>

      <ul className="card-ul">
        <li className="Star">
          <IoStarSharp className="star1" />
          <h4 id="star2">{resData.info.avgRating} </h4>
        </li>
        <li className="delivery-time">
          <h4>{resData.info.sla.deliveryTime}-minutes</h4>
        </li>
      </ul>
      <h4 className="cuisines">{resData.info.cuisines.join(", ")}</h4>

      {/* <li className="cost"> */}
      <h4>{resData.info.costForTwo}</h4>
      {/* </li> */}
    </div>
  );
};

export default RestaurantCard;
