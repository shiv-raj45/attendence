import React from "react";

const TextInput = ({ error, touched, children }) => {
  return (
    <div className="flex flex-col mt-3 w-full focus:text-red-700">
      <div className="flex justify-center items-center shadow-lg p-2 active:text-lime-600">
        {children}
      </div>
      <div className="text-err text-sm text-red-500  mt-1 capitalize">
        {error}{" "}
      </div>
    </div>
  );
};

export default TextInput;
