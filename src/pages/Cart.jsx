import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { useSelector } from "react-redux";
import DishesCard from "../components/DishesCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-28 pb-40 px-10">
      <h1 className="text-center font-bold text-xl sm:text-2xl">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-red-600 font-bold text-xl">Oops!!</p>
          <p>Your cart is empty</p>
          <p>Please add items...</p>
          <Link to="/">
            <button className="mt-4 border-gray-200 bg-red-500 hover:border-red-600 border-2 text-black hover:bg-white font-bold py-2 px-4 rounded">
              Back to Home
            </button>
          </Link>
        </div>
      ) : (
        <React.Fragment>
          <button
            className="mt-8 flex items-center justify-center gap-1 font-bold border-2 px-2 rounded-md hover:text-red-600 hover:bg-gray-100"
            onClick={handleClearCart}
          >
            <span>Clear</span>
            <MdOutlineClear />
          </button>
          <div className="mt-8 grid sm:grid-cols-2 sm:px-16 md:grid-cols-4 items-center justify-center gap-8">
            {cartItems.map((dish, index) => (
              <DishesCard className="bg-red-300" key={index} dish={dish} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
