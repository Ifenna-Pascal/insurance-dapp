import React, { useContext } from "react";
import { ToggleContext } from "../context/Toggle";
import Icons from "../Icons";

function MoadalWrapper({ children }) {
  const { modal, toggle, expand, setModal } = useContext(ToggleContext);
  console.log(modal, "modal");
  console.log(expand, "expand");
  return (
    <div
      className={`${
        modal &&
        "bg-overlay absolute z-0 h-screen w-screen top-[40%] left-[50%] duration-300 -translate-y-[50%] -translate-x-[50%]"
      }`}
    >
      <div
        className={`fixed top-[30%] right-[35%] z-50 min-w-[600px] min-h-[250px] rounded-md shadow-2xl ${
          modal ? "fixed" : "hidden"
        } bg-tetiary`}
      >
        <Icons
          icon={`close-fill`}
          hover="hover:bg-tetiary duration-300"
          onClick={() => setModal(false)}
        />
        <div className="flex flex-col w-[95%] mx-auto px-4">{children}</div>
      </div>
    </div>
  );
}

export default MoadalWrapper;
