import React from "react";
import UserCard from "../components/UserCard";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="pt-28 pb-44 px-36">
         <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-center">About Us</h1>
          <h2 className="text-2xl font-bold mb-2 mt-10 border-b-2 border-gray-300 w-32 pb-1">
            Our Story
          </h2>
          <p className="text-lg mt-5">
            Just Eat is a lead­ing glob­al online food deliv­ery mar­ket­place,
            con­nect­ing con­sumers with over 679,000 con­nect­ed part­ners
            through its plat­form. We offer an online mar­ketplace where sup­ply
            and demand for food and retail deliv­ery and order­ing meet. As an
            online food deliv­ery mar­ket­place, Just Eat facil­i­tates the online order­ing,
             pay­ment and occa­sion­al­ly, ful­fil­ment of orders. We utilise a hybrid 
            mod­el which builds on our mar­ket­place her­itage 
            (where part­ners do their own deliv­ery) with deliv­ery ser­vice 
            (for part­ners with­out their own deliv­ery capa­bil­i­ties).
          </p>
        <UserCard usernames={["HaaniAshraf", "yadukrishnan0","favas17"]} />
      </div>
    );
  }
}

export default About;
