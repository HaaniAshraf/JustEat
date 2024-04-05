import React, { Component } from "react";
// import User from '../assets/user.png'

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
    return (
      <div className="pt-24 pb-44 px-36">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
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
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4 mt-10 border-b-2 border-gray-300 w-60 pb-1">
            Management Board
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
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
