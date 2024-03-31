import React from 'react'
import './App.css'
import { IoSearch } from "react-icons/io5";
import chickenStrips from '../src/assets/images/chicken-strips.jpg'

const Header = () => {
  return(
    <div className='flex items-center py-4 px-1 justify-between fixed border-gray-200 border-b-2 w-full z-10 bg-white'>
      <div className='flex items-center justify-center'>
        <img src="./justEat.png" alt="" className='sm:h-14 h-12 sm:pl-6' />
        <h2 className='sm:text-3xl text-2xl font-bold'>JustEat</h2>
      </div>
        <div className='w-1/2 sm:w-1/3 relative h-9'>
         <input type="text" className='w-full sm:w-full sm:ml-1 pl-2 h-full rounded-md bg-gray-200 placeholder-pl-2 placeholder-ml-2' placeholder='Search' />
         <IoSearch className='absolute inset-y-0 right-7 sm:right-1 md:right-1 top-1/2 transform -translate-y-1/2 text-gray-400'/>
        </div>
      <div className=''>
        <ul className='sm:flex hidden items-center justify-center sm:gap-4 sm:pr-2 md:text-2xl md:gap-8 md:pr-5 font-semibold'>
          <li class="nav-item">Home</li>
          <li class="nav-item">About Us</li>
          <li class="nav-item">Contact Us</li>
          <li class="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  return (
    <div className='w-60 h-62 border-gray-300 border-2 p-2'>
      <img src={chickenStrips} alt="res-logo" />
      <h3>{props.resname}</h3>
      <h4>{props.categories}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-3 w-full h-full items-center justify-center pt-36'>
        <RestaurantCard resname='KFC' categories='Fries,Strips,Burgers' rating='4 stars' time='25min'/>
        <RestaurantCard resname='Dominos' categories='Pizza,Burgers,Rolls' rating='2 stars' time='40min'/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

export default AppLayout
