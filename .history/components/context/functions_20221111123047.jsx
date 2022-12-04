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
    try {
      const amount = ethers.utils.parseUnits(_amount.toString(), "ether");
      await contract
        .callStatic()
        .insure(amount, type, beneficiary, max_amount, password);
      const res = await contract.insure(
        amount,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };
  return {
    addPortfolio,
  };
}

export default ContractFunctionsHook;
