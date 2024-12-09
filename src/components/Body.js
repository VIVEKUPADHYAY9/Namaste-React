import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import useOnlinestatus from "../utils/useonlinestatus";
import resList from "../utils/mockData";
import body from "../css/body.css";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredList = () => {
    setFilteredRestaurant(
      listofRestaurants.filter((res) => res.info.avgRating > 4.2)
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.29790&lng=82.99560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  function goToRestaurantMenu(resId) {
    navigate(`/restaurants/${resId}`);
  }

  const onlineStatus = useOnlinestatus();
  if (onlineStatus == false) {
    return <h1>hey</h1>;
  }

  if (listofRestaurants == 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body w-[100%]">
      <div className="filter gap-5 flex">
        <div className="Search-bar m-9 p-5 flex items-center">
          <input
            className="input-Btn  pl-5 pr-14 py-2 border-3 border-solid  rounded-lg "
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Find your best Restaurant"
          ></input>
          <button
            className="searchBtn px-2 py-2   border-1 border-solid bg-green-700  "
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
        <div className="Search-bar m-9 p-5 flex items-center">
          <button
            className="top-restaurant-btn  bg-green-700 py-2 px-5"
            onClick={filteredList}
          >
            Top Rate Restaurant
          </button>
        </div>
      </div>
      <div className="resContainer  flex  flex-wrap items-center justify-center">
        {filteredRestaurant?.map((restaurant) => (
          <div onClick={() => goToRestaurantMenu(restaurant.info.id)}>
            <RestaurantCard resData={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
