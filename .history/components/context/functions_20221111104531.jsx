import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctions() {
  const { contract } = useContext(ContractContext);
  const addPortfolio = async ({
    type,
    password,
    amount,
    beneficiary,
    max_amount,
  }) => {
    const res = await contract.insure(
      amount: const addPortfolio = ({type, password, amount, beneficiary, }) => {

},
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

export default ContractFunctions;
