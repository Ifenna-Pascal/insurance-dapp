import { ethers } from "ethers";
import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctionsHook() {
  const { contract } = useContext(ContractContext);
  const addPortfolio = async ({
    type,
    password,
    _amount,
    beneficiary,
    max_amount,
  }) => {
    const amount = ethers.utils.parseUnits(_amount.toString(), "ether");
    const res = await contract.insure(
      amount,
      type,
      beneficiary,
      max_amount,
      password
    );
    return res;
  };
  return {
    addPortfolio,
  };
}

export default ContractFunctionsHook;
