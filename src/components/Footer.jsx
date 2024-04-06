import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between pl-28 gap-8 md:gap-0">
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
  );
};

export default Footer;
