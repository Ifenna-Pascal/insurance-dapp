import React from "react";

function Card({ header, value }) {
  return (
    <div className="w-full flex flex-col items-start min-h-[160px] rounded-md  p-6 bg-tetiary">
      <h1 className="text-slate-200 font-Poppins tracking-wider font-semibold text-2xl py-3">
        {header}
      </h1>
      <p className="text-gray-200 text-2xl font-Poppins">{value}</p>
    </div>
  );
}

export default Card;
