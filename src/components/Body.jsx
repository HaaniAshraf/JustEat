import React from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { IoStar } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ({ datas, restaurants, setRestaurants }) => {
  const resetFilters = () => {
    setRestaurants(datas);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <div className="pt-24 pb-36">
        <h1>Looks like you are Offline</h1>
        <h2>Check your internet connection</h2>
      </div>
    );
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  return (
    <div>
      <div className="md:pt-28 pt-24 sm:pl-18 md:pl-20 pl-6">
        <h5 className="sm:text-xl">Filter Restaurants :</h5>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => {
              const filteredRes = restaurants.filter(
                (restaurant) => restaurant.rating > 4
              );
              setRestaurants(filteredRes);
            }}
            className="filter-button"
          >
            <span>Above 4</span>
            <IoStar className="text-yellow-400 ml-1" />
          </button>
          <button
            onClick={() => {
              const filteredRes = restaurants.filter(
                (restaurant) => restaurant.rating > 3
              );
              setRestaurants(filteredRes);
            }}
            className="filter-button"
          >
            <span>Above 3</span>
            <IoStar className="text-yellow-400 ml-1" />
          </button>
          <button
            onClick={() => {
              const filteredRes = restaurants.filter(
                (restaurant) => restaurant.time < 30
              );
              setRestaurants(filteredRes);
            }}
            className="filter-button"
          >
            <span>Less than 30 min</span>
          </button>
          <button
            onClick={resetFilters}
            className="h-1/3 mt-2 flex items-center justify-center gap-2 p-1 font-semibold border-red-200 border-2 rounded-lg hover:bg-gray-100 hover:text-red-600 duration-200"
          >
            <span>Reset</span>
            <MdOutlineClear />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 w-full h-full items-center justify-start pl-32 md:pl-20 pt-16 pb-24">
        {restaurants.map((res, index) => (
          res.promoted ? <RestaurantCardPromoted key={index} resData={res}/> : <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
