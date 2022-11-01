import React, { useContext } from "react";
import { ToggleContext } from "../context/Toggle";
import MoadalWrapper from "../modal/Wrapper";

function RightBar({ expand }) {
  return (
    <div
      className={` absolute top-0 left-0 w-[250px] flex flex-col items-center  justify-center bg-tetiary duration-500 h-screen ${
        expand ? "translate-x-0" : "-translate-x-[250px]"
      }`}
    >
      <div>
        <Button name={"Top Up"} />
        <Button name={"Allowance"} />
        <Button name={"Make Claim"} />
        <Button name={"Change Beneficiary"} />
      </div>
    </div>
  );
}

export default RightBar;

function Button({ name, action }) {
  const { toggle, modal, expand, setExpand } = useContext(ToggleContext);
  const handleClick = () => {
    setExpand(false);
  };
  return (
    <div>
      <button
        className="flex items-center w-[200px] text-slate-300 my-4 border-none bg-transaprent tracking-wider text-base font-Poppins justify-center py-4 inset-12 shadow-xl rounded-xl"
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}
