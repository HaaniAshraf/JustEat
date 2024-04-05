import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center pt-36 pb-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops!!</h1>
          <h3 className="text-xl">Something went wrong...</h3>
          <h5 className="mt-6 text-gray-500"><Link to={'/'}>Back to Home</Link></h5>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
