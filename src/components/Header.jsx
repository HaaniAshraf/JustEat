import React from "react";
import Logo from "../assets/justEat.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdOutlineWifi } from "react-icons/md";
import { MdOutlineWifiOff } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";

const Header = ({ datas, setRestaurants }) => {
  // Initializing state for button name with 'Login' as default value
  const [btnName, setBtnName] = useState("Login");
  // Initializing state for search text with empty string as default value
  const [searchText, setSearchText] = useState("");
  // Getting the current location using useLocation hook from react-router-dom
  const location = useLocation();

  const handleSearch = () => {
    // Filtering datas based on search text
    const searchedRes = datas.filter((res) =>
      res.resname.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(searchedRes);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="z-50 flex items-center py-4 px-1 md:px-5 justify-between fixed border-gray-200 border-b-2 w-full bg-white shadow-md">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="" className="md:h-14 h-12 sm:pl-1" />
        <h2 className="md:text-3xl text-2xl font-bold">JustEat</h2>
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/3 relative h-9">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className="w-full sm:w-full sm:ml pl-2 h-full rounded-md bg-gray-200 placeholder-pl-2 placeholder-ml-2"
          placeholder="Search"
        />
        <IoSearch
          onClick={handleSearch}
          className="cursor-pointer absolute inset-y-0 right-7 sm:right-1 md:right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600"
        />
      </div>
      <div>
        <ul className="sm:flex sm:text-sm hidden items-center justify-center sm:gap-4 sm:pr-1 md:gap-8 font-semibold">
          <Link to={"/"}>
            <li
              className={location.pathname === "/" ? "active-link" : "nav-item"}
            >
              <TiHome />
            </li>
          </Link>
          <Link to={"/cart"}>
            {" "}
            <li
              className={
                location.pathname === "/cart" ? "active-link" : "nav-item"
              }
            >
              <div className="flex items-center gap-2 relative">
                <IoCartSharp />
                <span className="absolute -top-2 left-3 bg-red-600 h-3 w-3 rounded-full flex items-center justify-center text-white text-xxs">
                  {cartItems.length}
                </span>
              </div>
            </li>
          </Link>
          <Link to={"/about"}>
            {" "}
            <li
              className={
                location.pathname === "/about" ? "active-link" : "nav-item"
              }
            >
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={
                location.pathname === "/contact" ? "active-link" : "nav-item"
              }
            >
              Contact
            </li>
          </Link>
          <button
            className={`bg-gray-200 px-2 py-1 rounded-lg 
                          ${
                            btnName === "Login"
                              ? "text-green-600 hover:border-green-600"
                              : "text-red-600 hover:border-red-600 "
                          }
                          hover:border-2 duration-100`}
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className={`${onlineStatus ? "text-green-500" : "text-red-600"}`}>
            {onlineStatus ? (
              <MdOutlineWifi className="md:text-xl" />
            ) : (
              <MdOutlineWifiOff className="md:text-xl" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
