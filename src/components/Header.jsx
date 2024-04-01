import React from 'react'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex items-center py-4 px-1 justify-between fixed border-gray-200 border-b-2 w-full z-10 bg-white'>
    <div className='flex items-center justify-center'>
      <img src="src/assets/justEat.png" alt="" className='md:h-14 h-12 sm:pl-6' />
      <h2 className='md:text-3xl text-2xl font-bold'>JustEat</h2>
    </div>
      <div className='w-1/2 sm:w-1/3 relative h-9'>
       <input type="text" className='w-full sm:w-full sm:ml-1 pl-2 h-full rounded-md bg-gray-200 placeholder-pl-2 placeholder-ml-2' placeholder='Search' />
       <IoSearch className='absolute inset-y-0 right-7 sm:right-1 md:right-1 top-1/2 transform -translate-y-1/2 text-gray-400'/>
      </div>
    <div>
      <ul className='sm:flex hidden items-center justify-center sm:gap-6 sm:pr-2 md:text-2xl md:gap-10 md:pr-10 font-semibold'>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
  )
}

export default Header