import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import { useState } from "react";
import datas from "../components/datas";

const Home = () => {
  const [restaurants, setRestaurants] = useState(datas);
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Header datas={datas} setRestaurants={setRestaurants} />
      <Body
        datas={datas}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        searchText={searchText}
      />
    </div>
  );
};

export default Home;
