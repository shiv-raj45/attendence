import React from "react";
import Confetti from "react-confetti";
import Logout from "../Logout/Logout";

const Success = () => {
  return (
    <div className="w-full h-screen  flex justify-center items-center flex-col">
      <Confetti width={window.screen.width} height={window.screen.height} />

      <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Success
      </h1>
      <Logout />
    </div>
  );
};

export default Success;
