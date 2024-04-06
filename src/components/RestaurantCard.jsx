import React from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const RestaurantCard = ({ resData }) => {
  // Getting the navigate function using useNavigate hook
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigating to the specific restaurant page with restaurant data passed as state
    navigate(`/restaurant/${resData.resname}`, {
      state: { restaurantData: resData },
    });
  };
  return (
    <div
      onClick={handleClick}
      className="w-60 cursor-pointer border-gray-300 border-2 p-2 rounded-md h-72 hover:shadow-lg"
    >
      <img
        src={resData.image}
        alt="res-logo"
        className="hover:scale-105 duration-200 h-1/2 w-full"
      />
      <h3 className="text-center font-semibold text-xl">{resData.resname}</h3>
      <h4 className="text-gray-500">{resData.categories}</h4>
      <div className="flex items-center">
        <h4>{resData.rating}</h4>
        <IoStar className="text-yellow-400 ml-1" />
      </div>
      <h4 className="text-green-500">Delivery in : {resData.time} min</h4>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="z-10 rounded-md translate-y-1 translate-x-1 text-xs absolute bg-gray-800 text-white m-2 p-1">Popular</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;