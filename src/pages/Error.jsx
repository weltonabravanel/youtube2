import React from "react";
import monkey from "../assets/images/monkey.png";

const Error = () => {
  return (
    <div className="text-white min-h-[85vh] flex items-center flex-col justify-center md:text-xl text-center p-3">
      <img src={monkey} alt="Page wasn't found" className="p-5" />
      <p>This page isn't available. Sorry about that.</p>
      <p>Try searching for something else.</p>
    </div>
  );
};

export default Error;
