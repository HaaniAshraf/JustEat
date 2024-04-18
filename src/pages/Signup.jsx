import React from 'react'
import Forms from '../components/Forms'
import Logo from '../assets/justEat.png'

function Signup() {
  return (
    <div className='h-screen w-full flex flex-col items-center gap-12 py-6'>
        <div className='flex gap-1 items-center justify-center'>
            <img src={Logo} alt="" className='h-16'/>
            <h2 className='font-bold text-3xl'>JustEat</h2>
        </div>
        <Forms/>
    </div>
  )
}

export default Signup