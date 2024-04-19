import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducers/cartReducer";

const DishAccordion = ({ title, dishes }) => {
  // State to manage whether to show the items or not
  const [showItems, setShowItems] = useState(false);
  // Function to handle click event and toggle showItems state
  const handleClick = () => {
    setShowItems(!showItems);
  };

  // Initializing dispatch function to dispatch actions
  const dispatch = useDispatch();
  // Function to handle adding an item to the cart
  const handleAddItem = (dish,event) => {
    event.stopPropagation()
    dispatch(addItem(dish));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className=" w-full md:w-1/2 flex flex-col items-center justify-between bg-gray-100 shadow-lg rounded-md pb-2"
        onClick={handleClick}
      >
        <div className="px-2 pt-2 flex w-full items-center justify-between font-semibold cursor-pointer">
          <span>
            {title} ({dishes.length})
          </span>
          <span className="text-gray-800">
            <IoIosArrowDropdown />
          </span>
        </div>
        {showItems && (
          <div className="flex w-full bg-white flex-col gap-4 mt-2 pt-2">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-5 pb-3"
              >
                <div>
                  <h3 className="font-semibold">{dish.name}</h3>
                  <p className="text-sm font-bold text-green-600">
                    ₹ {dish.price}
                  </p>
                  <div className="text-sm flex items-center">
                    <h2>Rating : {dish.rating}</h2>
                    <IoStar className="text-yellow-400 ml-1" />
                  </div>
                </div>
                <div className="w-32 flex items-center justify-center">
                  <img src={dish.image} alt={dish.name} />
                  <div className="relative">
                    <button
                      onClick={(event) => handleAddItem(dish,event)}
                      className="bg-black hover:bg-gray-700 absolute right-10 top-5 text-white px-2 m-auto rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DishAccordion;
