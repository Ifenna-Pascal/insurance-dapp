import React from "react";

function AddPortfolio() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex items-start flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full h-[60px] outline-none rounded-md bg-primary text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={placeholder}
      />
      <button className="mt-6 w-[200px] text-gray-300 font-Poppins text-base tracking-wider bg-primary py-3 rounded-md  shadow-xl">
        Send
      </button>
    </form>
  );
}

export default AddPortfolio;
