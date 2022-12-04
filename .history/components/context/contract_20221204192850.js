import { useMoralis } from "react-moralis";
import { createContext, useContext, useEffect } from "react";
import abi from "./abi.json";
import { ethers } from "ethers";

export const ContractContext = createContext();
const address = "0x1465c9a53CE0B14c19304A326472a29ca09F9C5E";

const ContractProvider = ({ children }) => {
  const {
    web3,
    enableWeb3,
    Moralis,
    isWeb3Enabled,
    isWeb3EnableLoading,
    web3EnableError,
  } = useMoralis();
  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3();
    }
    console.log("connected", isWeb3Enabled);
  }, []);
  const provider = Moralis.web3;
  const signerOrProvider = provider?.getSigner() ?? provider;
  const contract = new ethers.Contract(address, abi.abi, signerOrProvider);
  console.log(contract);
  return (
    <ContractContext.Provider value={{ contract }}>
      <div>{children}</div>
    </ContractContext.Provider>
  );
};

export default ContractProvider;
