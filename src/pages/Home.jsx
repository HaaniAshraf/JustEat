import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
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

const Home = () => {
  const datas = [
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
  ]
  const [restaurants, setRestaurants] = useState(datas)  

  return(
    <div>
      <Header datas={datas} restaurants={restaurants} setRestaurants={setRestaurants}/>
      <Body datas={datas} restaurants={restaurants} setRestaurants={setRestaurants}/>
    </div>

  )
}

export default Home