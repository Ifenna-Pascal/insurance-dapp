import React from "react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import axios from "axios";
import { useRouter } from "next/router";
import { sign } from "next-auth";

function ConnectWallet() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { push } = useRouter();
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
    // redirect user after success authentication to '/user' page
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
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
