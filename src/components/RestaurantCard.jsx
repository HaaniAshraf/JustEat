import React from 'react'
import { IoStar } from "react-icons/io5";

const RestaurantCard = ({resData}) => {
  return (
    <div className='w-60 cursor-pointer border-gray-300 border-2 p-2 rounded-md h-72'>
      <img src={resData.image} alt="res-logo" className='hover:scale-105 duration-200 h-1/2 w-full' />
      <h3 className='text-center font-semibold text-xl'>{resData.resname}</h3>
      <h4 className='text-gray-500'>{resData.categories}</h4>
      <div className="flex items-center">
        <h4>{resData.rating}</h4>
        <IoStar className="text-yellow-400 ml-1" />
      </div>
      <h4 className='text-green-500'>{resData.time}</h4>
    </div>
  )
}

export default RestaurantCard