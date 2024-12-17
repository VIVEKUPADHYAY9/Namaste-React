// import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = ({ data }) => {
  // console.log(data);
  const [showItem, setshowItem] = useState(false);
  const handleclick = () => {
    setshowItem(!showItem);
  };
  return (
    <div>
      <div className="w-6/12  mx-auto my-4 shadow-lg shadow-orange-300 p-4 bg-green-200 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategories;
