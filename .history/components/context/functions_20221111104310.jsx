import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctions() {
  const { contract } = useContext(ContractContext);
  const addPortfolio = await ({ type, password, amount, beneficiary }) => {

  };
  return {
    addPortfolio,
  };
}

export default ContractFunctions;
