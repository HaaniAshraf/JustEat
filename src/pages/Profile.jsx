import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userDetails = useSelector((store) => store.user.userDetails);
  if (!userDetails) {
    return (
      <div className="pt-28 pb-64 sm:text-3xl text-2xl font-bold mb-4 text-center">
        Loading...
      </div>
    ); 
  }
  return (
    <div className="pt-28 pb-44 flex flex-col items-center justify-center">
      <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-center">
        Profile
      </h2>
      <table className="border-collapse border border-gray-400 rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-gray-400 px-4 py-2">
              {userDetails.name}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {userDetails.email}
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {userDetails.phone}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
