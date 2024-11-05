import { CDN_ULR } from "../src/utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_ULR + resData.info.cloudinaryImageId}
      />
      <h4>{resData.info.name}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime},minutes</h4>
    </div>
  );
};

export default RestaurantCard;
