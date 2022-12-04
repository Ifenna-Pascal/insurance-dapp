import { ethers, utils } from "ethers";
import React, { useContext } from "react";
import { ContractContext } from "./contract";
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "./abi.json";

function ContractFunctionsHook() {
  // const { contract } = useContext(ContractContext);
  const { Moralis } = useMoralis();
  const address = "0x9C46B0B4c9C5bc05E1D5FEd021f28147C4f3f8C9";
  const { runContractFunction } = useWeb3Contract();
  // const { runContractFunction: insure } = useWeb3Contract();

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
      const amounts = amount * 10 ** 18;
      const signer = web3PRovider.getSigner();
      const contract = new ethers.Contract(address, abi.abi, signer);
      console.log(amounts);
      const error = await contract.callStatic.insure(
        amounts,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(error);
      const res = await contract.insure(
        amounts,
        type,
        beneficiary,
        max_amount,
        password
      );
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

// const event = {
//   abi: abi.abi,
//   contractAddress: address,
//   functionName: "insure",
//   params: {
//     _amount: amount,
//     typeOfInsurance: type,
//     _beneficiary: beneficiary,
//     _maxAmountForBenef: max_amount,
//     _password: password,
//   },
// };
// runContractFunction({ params: event });
