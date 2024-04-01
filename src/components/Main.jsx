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


const Main = () => {

  const [restaurants,setRestaurants] = useState([
  { image: Kfc, resname: 'KFC', categories: 'Fries,Strips,Burgers', rating: 4, time: '25min' },
  { image: Dominos, resname: 'Dominos', categories: 'Pizza,Burgers,Rolls', rating: 2, time: '40min' },
  { image: BurgerLounge, resname: 'Burger Lounge', categories: 'Burgers,Ice-scream,Drinks', rating: 4.2, time: '35min' },
  { image: ClubSulaimani, resname: 'Club Sulaimani', categories: 'Pizzas,Beverages,Rolls', rating: 2.5, time: '20min' },
  { image: Kbc, resname: 'Kuttichira Biriyani Centre', categories: 'Biriyani,South Indian', rating: 4.6, time: '30min' },
  { image: Shap, resname: 'The Shap Family Restaurant', categories: 'South Indian', rating: 3, time: '48min' },
  { image: Suprabatham, resname: 'Suprabatham Veg', categories: 'Chinese,North Indian,South Indian', rating: 4.3, time: '18min' },
  { image: Starbucks, resname: 'Starbucks Coffee', categories: 'Beverages,Cafe', rating: 3, time: '23min' },
  { image: Hollywood, resname: 'Hollywood', categories: 'Ice cream,Desserts', rating: 2.5, time: '20min' },
  { image: MomoLush, resname: 'MOMO LUSH', categories: 'Chinese,Arabic', rating: 3.8, time: '15min' },
])
  // let restaurants = [
  //   { image: Kfc, resname: 'KFC', categories: 'Fries,Strips,Burgers', rating: 4, time: '25min' },
  //   { image: Dominos, resname: 'Dominos', categories: 'Pizza,Burgers,Rolls', rating: 2, time: '40min' },
  //   { image: BurgerLounge, resname: 'Burger Lounge', categories: 'Burgers,Ice-scream,Drinks', rating: 4.2, time: '35min' },
  //   { image: ClubSulaimani, resname: 'Club Sulaimani', categories: 'Pizzas,Beverages,Rolls', rating: 2.5, time: '20min' },
  //   { image: Kbc, resname: 'Kuttichira Biriyani Centre', categories: 'Biriyani,South Indian', rating: 4.6, time: '30min' },
  //   { image: Shap, resname: 'The Shap Family Restaurant', categories: 'South Indian', rating: 3, time: '48min' },
  //   { image: Suprabatham, resname: 'Suprabatham Veg', categories: 'Chinese,North Indian,South Indian', rating: 4.3, time: '18min' },
  //   { image: Starbucks, resname: 'Starbucks Coffee', categories: 'Beverages,Cafe', rating: 3, time: '23min' },
  //   { image: Hollywood, resname: 'Hollywood', categories: 'Ice cream,Desserts', rating: 2.5, time: '20min' },
  //   { image: MomoLush, resname: 'MOMO LUSH', categories: 'Chinese,Arabic', rating: 3.8, time: '15min' },
  // ]

  return (
    <div> 

      <div>
        <button onClick={() => {
         const filteredRes = restaurants.filter((restaurant) => restaurant.rating > 4 )
          setRestaurants(filteredRes)
        }} 
        className='bg-blue-200 mt-20'>
        Top Rated Restaurants  
        </button>
      </div>

      <div className='flex flex-wrap gap-10 w-full h-full items-center justify-center pt-20 pb-24'>
        {restaurants.map((res,index) => (
          <RestaurantCard key={index} resData={res}/>
        ))}
      </div>
    </div>
  )
}

export default Main