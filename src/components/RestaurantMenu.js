import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fechtdata();
  }, []);

  const fechtdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2904471&lng=82.986443&restaurantId=87263&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedcard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  console.log(itemCards);
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
        {/* <li>{itemsCards[0].card.info.name}</li> */}
        <li>burger</li>
        <li>kfc</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
