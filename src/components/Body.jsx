import React from 'react'
import RestaurantCard from './RestaurantCard'
import { IoStar } from "react-icons/io5";

const Body = ({ restaurants,setRestaurants }) => {

  return (
    <div> 
      <div className='md:pt-28 pt-24 sm:pl-18 md:pl-20 pl-6'>
        <h5 className='sm:text-xl'>
          Filter Restaurants :
        </h5>
        <div className='flex gap-4 mt-2'>
        <button onClick={() => {
         const filteredRes = restaurants.filter((restaurant) => restaurant.rating > 4 )
          setRestaurants(filteredRes)
        }} 
        className='filter-button'>
        <span>Above 4</span>
        <IoStar className="text-yellow-400 ml-1" />
        </button>
        <button onClick={() => {
         const filteredRes = restaurants.filter((restaurant) => restaurant.rating > 3 )
          setRestaurants(filteredRes)
        }} 
        className='filter-button'>
        <span>Above 3</span>
        <IoStar className="text-yellow-400 ml-1" />
        </button>
        <button onClick={() => {
         const filteredRes = restaurants.filter((restaurant) => restaurant.time < 30 )
          setRestaurants(filteredRes)
        }} 
        className='filter-button'>
        <span>Less than 30 min</span>
        </button>
        </div> 
      </div>

      <div className='flex flex-wrap gap-10 w-full h-full items-center pl-32 md:pl-20 pt-16 pb-24'>
        {restaurants.map((res,index) => (
          <RestaurantCard key={index} resData={res}/>
        ))}
      </div>
    </div>

  )
}

export default Body