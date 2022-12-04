import { createContext, useContext, useEffect, useState } from "react";
import abi from "./abi.json";
import { ethers } from "ethers";

export const ContractContext = createContext();
const contractAddress = "0x1465c9a53CE0B14c19304A326472a29ca09F9C5E";
// const ethereum = typeof window !== undefined ? window.ethereum : ""
const ethereum = global?.window && window.ethereum;
// const { ethereum } = window;

const ContractProvider = ({ children }) => {
  // Connect Application to Metamask wallet
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    console.log("comments");
  };

  // Check if wallet is connected
  const checkWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // initialize contract information
  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      abi.abi,
      signer
    );
    console.log(transactionContract);
    return transactionContract;
  };
  return (
    <ContractContext.Provider
      value={{
        currentAccount,
        connectWallet,
        getEthereumContract,
        checkWalletConnected,
      }}
    >
      <div>{children}</div>
    </ContractContext.Provider>
  );
};

export default ContractProvider;
