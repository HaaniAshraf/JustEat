import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";

const RestaurantInfo = () => {
  const location = useLocation();
  const { restaurantData } = location.state;
  return (
    <div>
      <RestaurantMenu restaurantData={restaurantData} />
    </div>
  );
};

export default RestaurantInfo;
