import React from "react";
import Body from "../components/Body";
import { useState } from "react";
import datas from "../components/datas";

const Home = () => {
  const [restaurants, setRestaurants] = useState(datas);
  return (
    <div>
      <Body
        datas={datas}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
    </div>
  );
};

export default Home;
