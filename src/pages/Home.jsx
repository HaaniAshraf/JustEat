import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import { useState } from 'react'
import datas from '../components/datas'

const Home = () => {
  const [restaurants, setRestaurants] = useState(datas)  
  return(
    
    <div>
      <Header datas={datas} restaurants={restaurants} setRestaurants={setRestaurants}/>
      <Body datas={datas} restaurants={restaurants} setRestaurants={setRestaurants}/>
    </div>

  )
}

export default Home