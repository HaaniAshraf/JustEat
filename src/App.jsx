import React from 'react'
import './App.css'


const Header = () => {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img src="./justEat.png" alt="" />
        <h2>JustEat</h2>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className='app'>
      <Header/>
    </div>
  )
}

export default AppLayout
