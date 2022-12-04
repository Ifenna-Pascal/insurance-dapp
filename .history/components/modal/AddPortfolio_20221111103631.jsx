import React from "react";

function AddPortfolio() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex items-start pb-6 flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Enter Amount"}
      />
      <input
        type="text"
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Portfolio Type"}
      />
      <input
        type="password"
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Password"}
      />
      <input
        type="text"
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"amount"}
      />
      <button className="mt-2 w-[200px] text-gray-300 font-Poppins text-base tracking-wider bg-primary py-3 rounded-md  shadow-xl">
        Send
      </button>
    </form>
  );
}

export default AddPortfolio;
