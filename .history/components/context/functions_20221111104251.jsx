import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctions() {
  const { contract } = useContext(ContractContext);
  const addPortfolio = ({ type, password, amount, beneficiary }) => {};
  return {};
}

export default ContractFunctions;
