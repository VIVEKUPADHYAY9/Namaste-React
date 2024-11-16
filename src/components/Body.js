import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredList = () => {
    setFilteredRestaurant(
      listofRestaurants.filter((res) => res.info.avgRating > 4.2)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2904471&lng=82.986443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining (?)
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants == 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <div className="Search-bar">
          <input
            className="input-Btn"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-Btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button className="top-restaurant-btn" onClick={filteredList}>
          Top Rate Restaurant
        </button>
      </div>
      <div className="Restaurant-Container">
        {filteredRestaurant.map((restaurnt) => (
          <RestaurantCard resData={restaurnt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
