import { useMoralis } from "react-moralis";
import { createContext, useContext } from "react";
import abi from "./abi.json";
const {
  web3,
  enableWeb3,
  isWeb3Enabled,
  isWeb3EnableLoading,
  web3EnableError,
} = useMoralis();
useEffect(() => {
  if (!isWeb3Enabled) {
    enableWeb3();
  }
  console.log("connected");
}, []);

export const contractContext = createContext();
const address = "0x9C46B0B4c9C5bc05E1D5FEd021f28147C4f3f8C9";

export const ContractProvider = ({}) => {
  const { Moralis } = useMoralis();
  const provider = Moralis.web3;
  const signerOrProvider = provider?.getSigner() ?? provider;
  const contract = new ethers.Contract(address, abi.abi, signerOrProvider);
  return contractContext.Provider;
};
