import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategoris";
import { CDN_ULR } from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center min-h-[70vh]">
      <div
        className="w-[55%] relative  -right-7  p-2 mx-auto mt-20    bg-gray-300  shadow-md shadow-stone-900
      "
      >
        <div className="w-9/12 text-center flex justify-between">
          <div className="">
            <h2 className="font-bold mt-3 text-2xl">{name}</h2>
            <p className="text-xs font-black m-1 p-1 ">{cuisines.join(",")}</p>
            <p className="font-semibold relative ">{costForTwoMessage}</p>
            <span className="flex items-center relative right-[-41px]">
              <IoStarSharp className="star1 m-[4px] bg-green-900 " />
              {avgRating}
            </span>
          </div>
          {
            <div className="w-[30%] relative right-[-92px] text-left  ">
              <img
                src={CDN_ULR + cloudinaryImageId}
                className=" rounded-xl w-full h-full"
              />
            </div>
          }
        </div>
      </div>
      {categories.map((categories) => (
        <RestaurantCategories
          key={categories?.card?.card.titel}
          data={categories?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
