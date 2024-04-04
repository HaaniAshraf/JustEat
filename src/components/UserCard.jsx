import React, { Component } from "react";

class UserCard extends Component {
  // constructor(props) {
  //   super(props);

  //   // Initialise state variable/component
  //   this.state = {
  //     usersInfo: [], // Array to store user information
  //   };
  // }

  async componentDidMount() {
    // Destructure the usernames prop from props
    // const { usernames } = this.props;
    // Array to store fetched user information
    // const usersInfo = [];

    try {
      // Loop through each username and fetch user information
      // for (const username of usernames) {
      //   const response = await fetch(
      //     `https://api.github.com/users/${username}`
      //   );
      //   const userInfo = await response.json();
      //   usersInfo.push(userInfo);
      // }

      // Update the component state with the fetched user information
      // this.setState({ usersInfo });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    // const { usersInfo } = this.state;
    return (
      <div className="py-24">

        <div>
          <h1>About Us</h1>
          <h2>Our Story</h2>
          <p>Just Eat is a lead­ing glob­al online food deliv­ery mar­ket­place, con­nect­ing con­sumers with over 679,000 con­nect­ed part­ners through its plat­form. We offer an online mar­ket­place where sup­ply and demand for food and retail deliv­ery and order­ing meet.</p>
        </div>

        {/* <div>
          <h2>Management Board</h2>
        {usersInfo.map((userInfo, index) => (
          <div key={index}>
            <img src={userInfo.avatar_url} alt="" />
            <h1>Name : {userInfo.name}</h1>
            <h4>Location : {userInfo.location}</h4>
          </div>
        ))}
        </div> */}

      </div>
    );
  }
}

export default UserCard;
