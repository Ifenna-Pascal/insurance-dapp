import { createContext, useContext, useEffect, useState } from "react";
import abi from "./abi.json";
import { ethers } from "ethers";
import { useRouter } from "next/router";

export const ContractContext = createContext();
const contractAddress = "0x1465c9a53CE0B14c19304A326472a29ca09F9C5E";
// const ethereum = typeof window !== undefined ? window.ethereum : ""
const ethereum = global?.window && window.ethereum;
// const { ethereum } = window;

const ContractProvider = ({ children }) => {
  // Connect Application to Metamask wallet
  const [currentAccount, setCurrentAccount] = useState("");
  const [count, setCount] = useState("");
  const router = useRouter();
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      console.log("connecting...");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("accounts", accounts);
      setCurrentAccount(accounts[0]);
      router.push("/dashboard");
      console.log(currentAccount);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  // Check if wallet is connected
  const checkWalletConnected = async () => {
    try {
      let res = false;
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("current", currentAccount);

        res = true;
      } else {
        console.log("No accounts found");
      }
      return res;
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

  const createInsurance = async ({
    beneficiary,
    amount,
    max_amount,
    type,
    password,
  }) => {
    try {
      const contract = await getEthereumContract();
      const amounts = amount * 10 ** 18;
      console.log(amounts, "amounts....");
      const error = await contract.callStatic.insure(
        amounts,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(error);
      const res = await contract.insure(
        amounts,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(res);
    } catch (error) {}
  };

  const viewCount = async () => {
    try {
      const contract = await getEthereumContract();
      const counts = await contract.count();
      setCount(counts.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContractContext.Provider
      value={{
        currentAccount,
        connectWallet,
        checkWalletConnected,
        createInsurance,
        viewCount,
        count,
      }}
    >
      <div>{children}</div>
    </ContractContext.Provider>
  );
};

export default ContractProvider;
