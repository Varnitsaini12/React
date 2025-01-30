// import React from "react";
import PropTypes from "prop-types";
import profilePic from "../assets/karolis-milisauskas-YY1FMC2xRf4-unsplash.jpg";

function Card({ username = "username", btnText = "Message" }) {
  console.log(username);
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white rounded-xl dark:bg-red-100">
      <img
        className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={profilePic}
        alt=""
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{username}</p>
          <p className="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
          {btnText}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired, // Ensures username is a string and required
  btnText: PropTypes.string, // Ensures btnText is a string (optional)
};

export default Card;
