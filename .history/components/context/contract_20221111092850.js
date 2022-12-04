import { useMoralis } from "react-moralis";
import { createContext, useContext } from "react";

export const contractContext = createContext();

export const ContractProvider = () => {
  const { Moralis } = useMoralis();
  const provider = Moralis.web3;
  const signerOrProvider = provider?.getSigner() ?? provider;
  return new ethers.Contract(
    config.address.marketRegistry,
    marketRegistryABI,
    signerOrProvider
  );
  return contractContext.Provider();
};
