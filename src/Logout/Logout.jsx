import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("creds");
    navigate("/register");
  };
  return (
    <div
      onClick={logout}
      className="w-20 h-8 bg-green-600 flex font-bold rounded-md mt-10 text-white justify-center items-center"
    >
      Logout
    </div>
  );
};

export default Logout;
