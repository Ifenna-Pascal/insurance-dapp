import React from "react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import axios from "axios";
import { useReducer } from "react";

function ConnectWallet() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const handleAuth = async () => {
    //disconnects the web3 provider if it's already active
    if (isConnected) {
      await disconnectAsync();
    }
    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });
    const userData = { address: account, chain: chain.id, network: "evm" };
    console.log(userData);
    // making a post request to our 'request-message' endpoint
    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = data.message;
    // signing the received message via metamask
    const signature = await signMessageAsync({ message });

    console.log(signature);
  };
  return (
    <div>
      <button
        className="bg-primary py-6 px-16 text-gray-200 font-Poppins tracking-wider shadow-xl text-xl "
        onClick={handleAuth}
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectWallet;
