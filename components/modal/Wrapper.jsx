import React from "react";

function MoadalWrapper({ children }) {
  return (
    <div className="h-screen fixed  w-screen">
      <div className="flex w-full h-full justify-center absolute  items-center min-w-[300px] min-h-[300px] bg-white rounded-xl shadow-lg"></div>
    </div>
  );
}

export default MoadalWrapper;
