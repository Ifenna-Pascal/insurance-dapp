import React, { useState } from "react";
import ContractFunctionsHook from "../context/functions";

function AddPortfolio() {
  const initialState = {
    amount: "",
    type: "",
    beneficiary: "",
    max_amount: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
  const { addPortfolio } = ContractFunctionsHook();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addPortfolio(form);
    console.log(res);
  };

  return (
    <form className="flex items-start pb-6 flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="amount"
        onChange={handleChange}
        value={form.amount}
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Enter Amount"}
      />
      <input
        type="text"
        onChange={handleChange}
        value={form.type}
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Portfolio Type"}
      />
      <input
        type="password"
        onChange={handleChange}
        value={form.password}
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Password"}
      />
      <input
        type="text"
        onChange={handleChange}
        value={form.beneficiary}
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Beneficiary"}
      />
      <input
        type="text"
        onChange={handleChange}
        value={form.max_amount}
        className="w-full h-[60px] outline-none rounded-md bg-primary mb-4 text-white text-base font-Poppins tracking-wider p-4 placeholder:text-gray-400 placeholder:font-Poppins placeholder:tracking-wider placeholder:text-base"
        placeholder={"Beneficiary Max Amount"}
      />
      <button className="mt-2 w-[200px] text-gray-300 font-Poppins text-base tracking-wider bg-primary py-3 rounded-md  shadow-xl">
        Send
      </button>
    </form>
  );
}

export default AddPortfolio;
