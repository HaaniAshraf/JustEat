import React, { lazy,Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import RestaurantInfo from "./pages/RestaurantInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Grocery = lazy(() => import('./components/Grocery'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/grocery" element={<Suspense fallback={<h1>Loading screen</h1>}><Grocery /></Suspense>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:resId" element={<RestaurantInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
