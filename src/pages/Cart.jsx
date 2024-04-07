import React from "react";
import { useSelector } from "react-redux";
import DishesCard from "../components/DishesCard";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="pt-28 pb-40">
      <h1 className="text-center font-bold text-xl sm:text-2xl">Your Cart</h1>
      <div className="mt-8 grid sm:grid-cols-2 sm:px-16 md:grid-cols-4 items-center justify-center gap-8">
        {cartItems &&
          cartItems.map((dish, index) => (
            <DishesCard className="bg-red-300" key={index} dish={dish} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
