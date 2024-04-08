import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="pt-28 pb-40 px-10 sm:px-28 md:px-64">
      <h1 className="text-center font-bold text-xl sm:text-2xl">Contact us</h1>
      <form onSubmit={handleSubmit} className="mt-4 md:mx-56 border-2 border-gray-300 p-8 rounded-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm sm:text-lg font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="6"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 mt-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
