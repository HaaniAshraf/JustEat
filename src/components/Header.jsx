import React from "react";
import Logo from "../assets/justEat.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdOutlineWifi, MdOutlineWifiOff, MdOutlineHome } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ datas, setRestaurants }) => {
  // Initializing state for button name with 'Login' as default value
  const [btnName, setBtnName] = useState("Login");
  // Initializing state for search text with empty string as default value
  const [searchText, setSearchText] = useState("");
  // State to manage whether the mobile navigation menu is open or closed
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    setNav(false);
  };

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
        <ul className="sm:flex sm:text-xl hidden items-center justify-center sm:gap-6 sm:pr-1 md:gap-8 font-semibold">
          <Link to={"/"}>
            <li
              className={location.pathname === "/" ? "active-link" : "nav-item"}
            >
              <div>
                <MdOutlineHome className="sm:block md:hidden" />
              </div>
              <span className="sm:hidden md:block">Home</span>
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
                <div className="sm:block md:hidden">
                  <AiOutlineShoppingCart />
                </div>
                <span className="absolute -top-2 md:-top-2 left-3 bg-red-600 h-3 w-3 md:h-4 md:w-4 md:text-xs rounded-full flex items-center justify-center text-white text-xxs">
                  {cartItems.length}
                </span>
              </div>
              <span className="sm:hidden md:block">Cart</span>
            </li>
          </Link>
          <Link to={"/about"}>
            {" "}
            <li
              className={
                location.pathname === "/about" ? "active-link" : "nav-item"
              }
            >
              <div>
                <BsInfoCircle className="sm:block md:hidden" />
              </div>
              <span className="sm:hidden md:block">About</span>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={
                location.pathname === "/contact" ? "active-link" : "nav-item"
              }
            >
              <div className="sm:block md:hidden">
                <RiContactsBook2Line />
              </div>
              <span className="sm:hidden md:block">Contact</span>
            </li>
          </Link>
          <button
            className={`bg-gray-200 px-2 py-1 rounded-lg sm:text-xs
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
        <div className="sm:hidden">
          <button
            onClick={() => setNav(!nav)}
            className="text-3xl pr-2 pt-2 text-gray-500"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </button>
          {nav && (
            <ul className="flex flex-col items-center justify-center bg-white absolute top-16 left-0 w-full py-4 border-b border-gray-200">
              <li className="my-2">
                <Link to={"/"} onClick={closeNav} className="text-gray-800 hover:text-red-600 font-semibold text-xl">
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link to={"/cart"} onClick={closeNav} className="text-gray-800 hover:text-red-600 font-semibold text-xl">
                  Cart
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to={"/about"} onClick={closeNav}
                  className="text-gray-800 hover:text-red-600 font-semibold text-xl"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to={"/contact"} onClick={closeNav}
                  className="text-gray-800 hover:text-red-600 font-semibold text-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
