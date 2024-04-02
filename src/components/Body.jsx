import React from 'react'
import { useState } from 'react'
import Kfc from '../assets/foodImg/kfc.jpg'
import Dominos from '../assets/foodImg/dominos.jpg'
import BurgerLounge from  '../assets/foodImg/burgerLounge.png'
import ClubSulaimani from '../assets/foodImg/clubSulaimani.png'
import Kbc from '../assets/foodImg/kbc.png'
import Shap from '../assets/foodImg/shap.png'
import Suprabatham from '../assets/foodImg/suprabatham.png'
import Starbucks from '../assets/foodImg/starbucks.png'
import Hollywood from '../assets/foodImg/hollywood.png'
import MomoLush from '../assets/foodImg/momos.png'
import RestaurantCard from './RestaurantCard'
import { IoStar } from "react-icons/io5";


const Body = () => {

  const [restaurants,setRestaurants] = useState([
  { image: Kfc, resname: 'KFC', categories: 'Fries,Strips,Burgers', rating: 4, time: '25' },
  { image: Dominos, resname: 'Dominos', categories: 'Pizza,Burgers,Rolls', rating: 2, time: '40' },
  { image: BurgerLounge, resname: 'Burger Lounge', categories: 'Burgers,Ice-scream,Drinks', rating: 4.2, time: '35' },
  { image: ClubSulaimani, resname: 'Club Sulaimani', categories: 'Pizzas,Beverages,Rolls', rating: 2.5, time: '20' },
  { image: Kbc, resname: 'Kuttichira Biriyani Centre', categories: 'Biriyani,South Indian', rating: 4.6, time: '30' },
  { image: Shap, resname: 'The Shap Family Restaurant', categories: 'South Indian', rating: 3, time: '48' },
  { image: Suprabatham, resname: 'Suprabatham Veg', categories: 'Chinese,North Indian,South Indian', rating: 4.3, time: '18' },
  { image: Starbucks, resname: 'Starbucks Coffee', categories: 'Beverages,Cafe', rating: 3, time: '23' },
  { image: Hollywood, resname: 'Hollywood', categories: 'Ice cream,Desserts', rating: 2.5, time: '20' },
  { image: MomoLush, resname: 'MOMO LUSH', categories: 'Chinese,Arabic', rating: 3.8, time: '15' },
])

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

      <div className='flex flex-wrap gap-10 w-full h-full items-center justify-center pt-16 pb-24'>
        {restaurants.map((res,index) => (
          <RestaurantCard key={index} resData={res}/>
        ))}
      </div>
    </div>
  )
}


export default Body