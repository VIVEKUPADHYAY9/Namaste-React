import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="Body">
      <div className="Search-bar">
        <input className="input-Btn" type="text"></input>
        <button className="search-Btn">Search</button>
      </div>
      <div>
        <button></button>
      </div>
      <div className="Restaurant-Container">
        {resList.map((restaurnt) => (
          <RestaurantCard resData={restaurnt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
