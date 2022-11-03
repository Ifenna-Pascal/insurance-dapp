import React, { createContext, useState } from "react";

export const ToggleContext = createContext();

function Toggle({ children }) {
  const [expand, setExpand] = useState(false);
  const [modal, setModal] = useState(false);
  const [actionType, setActionType] = useState("");

  return (
    <ToggleContext.Provider
      value={{ expand, setExpand, modal, setModal, actionType, setActionType }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export default Toggle;
