import React, { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import RestaurantInfo from "./pages/RestaurantInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./pages/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/grocery"
              element={
                <Suspense
                  fallback={
                    <div className="py-40 font-bold text-2xl text-center">
                      Loading Grocery...
                    </div>
                  }
                >
                  <Grocery />
                </Suspense>
              }
            />
            <Route path="/restaurant/:resId" element={<RestaurantInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
