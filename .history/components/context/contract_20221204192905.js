import { useMoralis } from "react-moralis";
import { createContext, useContext, useEffect } from "react";
import abi from "./abi.json";
import { ethers } from "ethers";

export const ContractContext = createContext();
const address = "0x1465c9a53CE0B14c19304A326472a29ca09F9C5E";

const ContractProvider = ({ children }) => {
  return (
    <ContractContext.Provider value={{ contract }}>
      <div>{children}</div>
    </ContractContext.Provider>
  );
};

export default ContractProvider;
