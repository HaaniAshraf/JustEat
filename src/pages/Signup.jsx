import React from "react";
import Forms from "../components/Forms";

function Signup() {
  return (
    <div className="h-screen w-full flex flex-col gap-8 items-center justify-center">
      <h2 className=" text-center">
        <span className="font-bold sm:text-2xl text-xl">
          "Join the flavor revolution."
        </span>
        <br />
        <span className="sm:text-xl text-base text-gray-500">
          Sign up now to satisfy your cravings with{" "}
          <span className="text-[#aa081c] font-semibold">Just</span> a click!
        </span>
      </h2>
      <Forms />
    </div>
  );
}

export default Signup;
