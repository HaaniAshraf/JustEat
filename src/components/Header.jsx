import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

const Header = ({ datas,setRestaurants }) => {
  const [btnName,setBtnName] = useState('Login')
  const [searchText,setSearchText] = useState("")
  
  const handleSearch = () => {
    const searchedRes = datas.filter((res) => res.resname.toLowerCase().includes(searchText.toLowerCase()));
    setRestaurants(searchedRes);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (

    <div className='flex items-center py-4 px-1 justify-between fixed border-gray-200 border-b-2 w-full z-10 bg-white'>
    <div className='flex items-center justify-center'>
      <img src="src/assets/justEat.png" alt="" className='md:h-14 h-12 sm:pl-6' />
      <h2 className='md:text-3xl text-2xl font-bold'>JustEat</h2>
    </div>
      <div className='w-1/2 sm:w-1/3 relative h-9'>
       <input type="text" value={searchText} 
        onChange={(e) => { setSearchText(e.target.value) }}
        onKeyDown={handleKeyDown}
        className='w-full sm:w-full sm:ml-1 pl-2 h-full rounded-md bg-gray-200 placeholder-pl-2 placeholder-ml-2' placeholder='Search' />
       <IoSearch onClick={ handleSearch }
        className='cursor-pointer absolute inset-y-0 right-7 sm:right-1 md:right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600'/>
      </div>
    <div>
      <ul className='sm:flex sm:text-sm hidden items-center justify-center sm:gap-4 sm:pr-2 md:gap-10 md:pr-10 font-semibold'>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Cart</li>
        <button className={`bg-gray-200 px-2 py-1 rounded-lg 
                          ${btnName === 'Login' ? 'text-green-600 hover:border-green-600' : 'text-red-600 hover:border-red-600 '}
                          hover:border-2 duration-100`}
        onClick={() => { 
          btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login')
         }} >
          {btnName}
        </button>
      </ul>
    </div>
  </div>

  )
}

export default Header