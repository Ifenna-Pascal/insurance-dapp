import { ethers, utils } from "ethers";
import React, { useContext } from "react";
import { ContractContext } from "./contract";
import { useMoralis } from "react-moralis";

function ContractFunctionsHook() {
  // const { contract } = useContext(ContractContext);
  const { Moralis } = useMoralis();
  const addPortfolio = async ({
    type,
    password,
    amount,
    beneficiary,
    max_amount,
  }) => {
    try {
      const ethers = Moralis.web3Library;
      const web3PRovider = await Moralis.enableWeb3();
      const amounts = utils.parseEther(amount);
      console.log(amounts);
      const error = await contract.callStatic.insuranceDeposit(amounts);
      console.log(error);
      const res = await contract.insuranceDeposit(amounts);
      console.log(res);
    } catch (e) {
      console.error(e, "error");
    }
  };
  return {
    addPortfolio,
  };
}

export default ContractFunctionsHook;
