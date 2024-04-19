import React, { Component } from "react";
import Shimmer from "./Shimmer";

class UserCard extends Component {
  constructor(props) {
    super(props);

    // Initialise state variable/component
    this.state = {
      usersInfo: [], // Array to store user information
    };
  }

  async componentDidMount() {
    // Destructure the usernames prop from props
    const { usernames } = this.props;
    // Array to store fetched user information
    const usersInfo = [];

    try {
      // Loop through each username and fetch user information
      for (const username of usernames) {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userInfo = await response.json();
        usersInfo.push(userInfo);
      }

      // Update the component state with the fetched user information
      this.setState({ usersInfo });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { usersInfo } = this.state;

    const shimmers = [];
    for (let i = 0; i < 3; i++) {
      shimmers.push(<Shimmer key={i} />);
    }

    return usersInfo.length === 0 ? (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4">{shimmers}</div>
    ) : (
      <div className="pt-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4 mt-10 border-b-2 border-gray-300 w-60 pb-1">
            Management Board
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4">
            {usersInfo.map((userInfo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mb-4 border-gray-300 border-2 px-5 md:px-14 py-5 rounded-xl mt-2"
              >
                <img
                  src={userInfo.avatar_url}
                  alt=""
                  className="w-40 h-40 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold mt-2 text-center">
                    {userInfo.name}
                  </h1>
                  <h4 className="text-gray-600 text-center">
                    {userInfo.location}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
