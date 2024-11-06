import { useState } from "react";
import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resList);
  const filteredList = () => {
    setlistofRestaurants(
      listofRestaurants.filter((res) => res.info.avgRating > 4.5)
    );
  };

  return (
    <div className="Body">
      <div className="Search-bar">
        <input className="input-Btn" type="text"></input>
        <button className="search-Btn">Search</button>
      </div>
      <div className="top-restaurant">
        <button className="top-restaurant-btn" onClick={filteredList}>
          Top Rate Restaurant
        </button>
      </div>
      <div className="Restaurant-Container">
        {listofRestaurants.map((restaurnt) => (
          <RestaurantCard resData={restaurnt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
