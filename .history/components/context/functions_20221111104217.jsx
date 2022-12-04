import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctions() {
  const { contract } = useContext(ContractContext);
  return <div>ContractFunctions</div>;
}

export default ContractFunctions;
