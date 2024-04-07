import React from "react";
import { IoStar } from "react-icons/io5";

const DishesCard = ({ dish }) => {
  return (
    <div className="flex flex-col justify-between h-full items-center hover:shadow-md border-2 border-gray-300 rounded-lg py-4 cursor-pointer">
      <div className="w-3/4 items-center justify-center">
        <img
          className="p-5 hover:scale-110 duration-200 w-full"
          src={dish.image}
          alt={dish.name}
        />
      </div>
      <h3 className="text-xl font-semibold">{dish.name}</h3>
      <p className="font-bold text-green-600">₹ {dish.price}</p>
      <div className="flex items-center">
        <h2>Rating : {dish.rating}</h2>
        <IoStar className="text-yellow-400 ml-1" />
      </div>
    </div>
  );
};

export default DishesCard;
