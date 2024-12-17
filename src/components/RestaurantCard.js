import { CDN_ULR } from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";
import restaurantcard from "../css/restaurantcard.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="rescard m-[10px] p-1 transition-all gap-[25px]  w-[270px]  h-[350px] border-2 border-solid border-[#ccccccee] cursor-pointer rounded-xl bg-[#ccccccee] hover:border-black hover:scale-95 ">
      <img
        className="res-logo w-full h-[52%] rounded-2xl object-cover"
        alt="res-logo"
        src={CDN_ULR + resData.info.cloudinaryImageId}
      />
      <h4 className="name my-1 fontsemibold py-1 text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
        {resData.info.name}
      </h4>

      <ul className="card-ul flex items-center">
        <li className="Star flex -m-1 p-[2px] list-none font-medium">
          <IoStarSharp className="star1 m-[4px] bg-green-900 " />
          <h4 id="star2 m-[2px] p-[2px] fontsemibold">
            {resData.info.avgRating}{" "}
          </h4>
          <li className="delivery-time font-medium  mt-[-4px]">
            <h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis ">
              {resData.info.sla.deliveryTime}-minutes
            </h4>
          </li>
        </li>
      </ul>
      <h4 className="cuisines my-1 whitespace-nowrap overflow-hidden text ellipsis ">
        {resData.info.cuisines.join(", ")}
      </h4>

      {/* <li className="cost"> */}
      <h4 className=" cost font-medium pl-2 pt-5 whitespace-wrap overflow-hidden text-ellipsis ">
        {resData.info.costForTwo}
      </h4>
      {/* </li> */}
    </div>
  );
};

//Higher oder component

// input - RestaurantCard==> ReastaurantCardPromoted

export const withPromoteLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
