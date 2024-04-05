import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantInfo = () => {
  const location = useLocation();
  const { restaurantData } = location.state;
  return (
    <div>
      <Header />
      <RestaurantMenu restaurantData={restaurantData} />
      <Footer />
    </div>
  );
};

export default RestaurantInfo;
