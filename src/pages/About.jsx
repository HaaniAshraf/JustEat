import React from "react";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { Component } from "react";
import Footer from "../components/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserCard usernames={['HaaniAshraf','yadukrishnan0']} />
        <Footer />
      </div>
    );
  }
}

export default About;