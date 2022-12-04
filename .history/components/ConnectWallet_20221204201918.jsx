import React, { useContext } from "react";
// import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { InjectedConnector } from "@wagmi/core";
import { ContractContext } from "./context/contract";

function ConnectWallet() {
  // const { connectAsync } = useConnect();
  // const { disconnectAsync } = useDisconnect();
  // const { isConnected } = useAccount();
  const { push } = useRouter();
  const { connectWallet } = useContext(ContractContext);
  return (
    <div>
      <button
        className="bg-primary py-6 px-16 text-gray-200 font-Poppins tracking-wider shadow-xl text-xl "
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectWallet;
