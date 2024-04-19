import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { useSelector } from "react-redux";
import DishesCard from "../components/DishesCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/reducers/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  // Fetching cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
  // Initializing dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-28 pb-40 px-10">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-red-600 font-bold text-xl">Oops!!</p>
          <p>Your cart is empty</p>
          <p>Please add items...</p>
          <Link to="/home">
            <button className="mt-4 border-red-600 hover:bg-red-500 hover:border-red-600 hover:text-white border-2 text-black font-bold py-2 px-4 rounded">
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
              <DishesCard key={index} dish={dish} dishIndex={index} showRemoveButton={true} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
