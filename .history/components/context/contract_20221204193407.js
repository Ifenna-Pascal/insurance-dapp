import { createContext, useContext, useEffect, useState } from "react";
import abi from "./abi.json";
import { ethers } from "ethers";

export const ContractContext = createContext();
const address = "0x1465c9a53CE0B14c19304A326472a29ca09F9C5E";

const ContractProvider = ({ children }) => {
  // Connect Application to Metamask wallet
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("accounts", accounts);
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  return (
    <ContractContext.Provider value={{ contract }}>
      <div>{children}</div>
    </ContractContext.Provider>
  );
};

export default ContractProvider;
