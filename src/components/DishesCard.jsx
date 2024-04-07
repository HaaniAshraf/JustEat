import React from "react";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const DishesCard = ({ dish, showRemoveButton }) => {
  // Initializing dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to handle removing the item
  const handleRemoveItem = () => {
    dispatch(removeItem(dish));
  };

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
      {/* Conditionally render remove button if showRemoveButton is true */}
      {showRemoveButton && (
        <button
          className="mt-4 px-2 py-1 text-red-600 rounded-md hover:bg-red-500 hover:text-white font-bold border-2 border-red-600"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default DishesCard;
