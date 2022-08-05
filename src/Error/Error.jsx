import React from "react";
import Logout from "../Logout/Logout";

const Error = () => {
  return (
    <div className="w-full flex-col h-screen bg-red-800 flex justify-center items-center">
      <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 transition-all duration-150 animate-fade">
        Error
      </h1>
      <Logout />
    </div>
  );
};

export default Error;
