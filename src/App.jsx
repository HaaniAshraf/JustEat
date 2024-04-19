import React, { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import RestaurantInfo from "./pages/RestaurantInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import { Provider } from "react-redux";
import Store from './redux/store'

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/about"
              element={
                <Suspense
                  fallback={
                    <div className="py-40 font-bold text-2xl text-center">
                      Loading
                    </div>
                  }
                >
                  <About />
                </Suspense>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurant/:resId" element={<RestaurantInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
