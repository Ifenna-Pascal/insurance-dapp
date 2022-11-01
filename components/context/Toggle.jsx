import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

function Toggle({ children }) {
  const [expand, setExpand] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = (value) => {
    // switch (value) {
    //   case expand :
    //     setExpand(!
    // }
  };
  return (
    <ToggleContext.Provider
      value={{ toggle, expand, setExpand, modal, setModal }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export default Toggle;
