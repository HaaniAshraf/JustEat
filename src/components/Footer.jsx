import React from 'react'
import Gplay from '../assets/google-play.png'
import Apple from '../assets/apple-logo.png'

const Footer = () => {
  return (

    <div>

        <div className='bg-gray-200 flex justify-center items-center py-5 gap-2 sm:gap-8 px-5 sm:px-20'>
            <div>
               <h2 className='text-gray-800 font-bold sm:text-xl md:text-2xl w-2/3'>For better experience,download <br /> the JustEat app now</h2> 
            </div>
            <div className='flex gap-5 w-1/3 justify-center'>
                <div className='footer-app'>
                    <div className=''><img src={Gplay} alt="" className='footer-img' /></div>
                    <div className='hidden sm:block'>Get it on <br /> <span className='font-bold'>Google Play</span></div>
                </div>
                <div className='footer-app'>
                    <div className=''><img src={Apple} alt="" className='footer-img' /></div>
                    <div className='hidden sm:block'>Download from <br /> <span className='font-bold'>App Store</span></div>
                </div>
            </div>
        </div>

        <div className="bg-gray-600 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between pl-28 sm:gap-8 md:gap-0">
                    <div className="w-full md:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">JustEat</h3>
                        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                    </div>
                 <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Contact us</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
                    <ul>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4">We deliver to:</h3>
                    <p>Bangalore</p>
                    <p>Gurgaon</p>
                    <p>Hyderabad</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                    <p>Pune</p>
                    <p>And 589 more cities...</p>
                </div>
            </div>
        </div>
    </div>

    </div>

  )
}

export default Footer