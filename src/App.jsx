import React from 'react'
import './App.css'
import { IoSearch } from "react-icons/io5";


const Header = () => {
  return(
    <div className='flex items-center p-4 justify-between fixed border-gray-200 border-b-2 w-full z-10'>
      <div className='flex items-center justify-center'>
        <img src="./justEat.png" alt="" className='sm:h-14 h-12 sm:pl-6' />
        <h2 className='sm:text-3xl text-2xl font-bold'>JustEat</h2>
      </div>
        <div className='w-1/2 relative h-9'>
         <input type="text" className='w-3/4 sm:w-3/4 ml-7 sm:ml-12 pl-2 h-full rounded-md bg-gray-200 placeholder-pl-2 placeholder-ml-2' placeholder='Search' />
         <IoSearch className='absolute inset-y-0 right-7 sm:right-5 md:right-40 top-1/2 transform -translate-y-1/2 text-gray-400'/>
        </div>
      <div className=''>
        <ul className='flex items-center justify-center sm:pr-8 sm:gap-10 sm:text-xl font-semibold'>
          <li class="nav-item">Home</li>
          <li class="nav-item">About Us</li>
          <li class="nav-item">Contact Us</li>
          <li class="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  )
}

// const RestaurantCard = () => {
//   return (
//     <div className='w-60 h-60 border-black border-2'>
//       <img src="" alt="" />
//       <h3>KFC</h3>
//     </div>
//   )
// }

// const Body = () => {
//   return (
//     <div className='body'>
//       <div className='res-container'>
//         <RestaurantCard/>
//       </div>
//     </div>
//   )
// }

const AppLayout = () => {
  return(
    <div className='app'>
      <Header/>
      {/* <Body/> */}
    </div>
  )
}

export default AppLayout
