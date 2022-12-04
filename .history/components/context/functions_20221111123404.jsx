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
      // const error = await contract
      //   .callStatic()
      //   .insure(amount, type, beneficiary, max_amount, password);
      // console.log(error);
      // const res = await contract.insure(
      //   amount,
      //   type,
      //   beneficiary,
      //   max_amount,
      //   password
      // );
      // console.log(res);
      contract.callStatic
      .insureamount)
      .then((result) => {
        setLoading(true);
        tokenContract.burnToken(amount).then(async (result) => {
          await result.wait();
          setLoading(false);
          toast.success("Token Burned Successfully");
        });
      })
      .catch((err) => {
        setLoading(false);
        const code = err.data.replace("Reverted ", "");
        let reason = ethers.utils.toUtf8String("0x" + code.substr(138));
        toast.error(reason);
      });
  }
    } catch (e) {
      console.error(e, "error");
    }
  };
  return {
    addPortfolio,
  };
}

export default ContractFunctionsHook;
