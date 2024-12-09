import { useEffect, useState } from "react";
import { RestaurantMenu_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RestaurantMenu_API + resId);
    const json = await data.json();
    setresInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
