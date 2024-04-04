import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Coupon1 from '../assets/coupons/coupon1.jpg'
import Coupon2 from '../assets/coupons/coupon2.jpg'

const RestaurantMenu = ({ restaurantData }) => {
  return (
    <div className='py-32 px-14'>

        <div className='flex items-center border-2 border-gray-300 p-5 gap-5 rounded-lg w-full sm:w-3/4 sm:ml-24 sm:gap-0 md:w-1/2 md:ml-96 md:gap-0'>
            <div className='w-1/2 flex flex-col gap-1 md:gap-3'>
                <h1 className='font-bold text-4xl'>{restaurantData.resname}</h1>
                <h2 className='text-gray-500 text-xl'>{restaurantData.categories}</h2>
                <div className="flex items-center">
                    <h2 className='text-xl'>Rating : {restaurantData.rating}</h2>
                    <IoStar className="text-yellow-400 ml-1 text-xl" />
                </div>
                <h2 className='text-green-500 text-xl'>Delivery Time: {restaurantData.time} min</h2>
                <div className='flex items-center gap-1'>
                    <FaLocationDot className='text-red-600 text-xl' />
                    <h2 className='text-xl'>{restaurantData.outlet}</h2>
                </div>
            </div>
            <div className='w-1/2'>
            <img src={restaurantData.image} alt={restaurantData.resname} />
            </div>
        </div>

        <div className='mt-10'>
            <div className='w-full px-28 sm:px-60 md:w-2/3 md:px-96 md:ml-60'>
            <h2 className='pb-2 text-center font-semibold text-xl border-b-2 border-gray-300'>Deals For You</h2>
            </div>
            <div className='flex flex-col'>
                <div className='mt-4 flex flex-col gap-5 px-10 sm:flex sm:flex-row sm:px-0 md:px-60 md:gap-14 md:mt-8'>
                    <div className='coupon sm:w-1/2'>
                        <img className='h-16' src={Coupon1} alt="" />
                        <div>
                            <p className='coupon-head'>15% Off Upto ₹150</p>
                            <p className='coupon-code'>USE HSBCMANIA</p>
                        </div>
                    </div>
                    <div className='coupon sm:w-1/2'>
                    <img className='h-16' src={Coupon2} alt="" />
                    <div>
                        <p className='coupon-head'>Flat ₹25 Off</p>
                        <p className='coupon-code'>USE SIMPL25</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-10'>
        <div className='w-full px-28 sm:px-64 md:w-2/3 md:ml-60 md:px-96'>
            <h2 className='pb-2 text-center font-semibold text-xl border-b-2 border-gray-300'>Our Menu</h2>
        </div>
        <div className='mt-8 flex flex-col gap-10 sm:grid sm:grid-cols-2 md:mt-12 md:grid md:grid-cols-3 md:px-20 md:gap-20'>
        {restaurantData.dishes.map((dish, index) => (
          <div className='flex flex-col justify-center items-center hover:shadow-md border-2 border-gray-300 rounded-lg py-4 cursor-pointer' key={index}>
            <div className='w-3/4 items-center justify-center'>
            <img className='p-5 hover:scale-110 duration-200 w-full' src={dish.image} alt={dish.name} />
            </div>
            <h3 className='text-xl font-semibold'>{dish.name}</h3>
            <p className='font-bold text-green-600'>₹ {dish.price}</p>
            <div className="flex items-center">
                    <h2>Rating : {dish.rating}</h2>
                    <IoStar className="text-yellow-400 ml-1" />
            </div>
          </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default RestaurantMenu