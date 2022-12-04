import { ethers, utils } from "ethers";
import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctionsHook() {
  // const { contract } = useContext(ContractContext);
  const addPortfolio = async ({
    type,
    password,
    amount,
    beneficiary,
    max_amount,
  }) => {
    try {
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
