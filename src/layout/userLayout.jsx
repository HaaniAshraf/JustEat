import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import { useState } from "react";
import datas from "../components/datas";

const UserLayout = () => {
    const [restaurants, setRestaurants] = useState(datas);
  return (
    <div>
        <Header
            datas={datas}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
        />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout