import { useRouter } from "next/router";
import React from "react";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import axios from "axios";

function ConnectWallet() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <button
        className="bg-primary py-6 px-16 text-gray-200 font-Poppins tracking-wider shadow-xl text-xl "
        onClick={handleClick}
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectWallet;
