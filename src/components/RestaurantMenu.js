import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  return (
    <div>
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100}Rs
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
