import React from "react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useMoralis } from "react-moralis";
import { InjectedConnector } from "@wagmi/core";

function ConnectWallet() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { push } = useRouter();
  const { signMessageAsync } = useSignMessage();
  // const handleAuth = async () => {
  //   //disconnects the web3 provider if it's already active
  //   if (isConnected) {
  //     await disconnectAsync();
  //   }
  //   const { account, chain } = await connectAsync({
  //     connector: new InjectedConnector(),
  //   });
  //   const userData = { address: account, chain: chain.id, network: "evm" };
  //   console.log(userData);
  //   // making a post request to our 'request-message' endpoint
  //   const { data } = await axios.post("/api/auth/request-message", userData, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const message = data.message;
  //   // signing the received message via metamask
  //   const signature = await signMessageAsync({ message });
  //   console.log(signature);
  //   // redirect user after success authentication to '/user' page
  //   const { url } = await signIn("credentials", {
  //     message,
  //     signature,
  //     redirect: false,
  //     callbackUrl: "/dashboard",
  //   });
  //   /**
  //    * instead of using signIn(..., redirect: "/user")
  //    * we get the url from callback and push it to the router to avoid page refreshing
  //    */
  //   push(url);
  // };
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <h1>Hi {user.get("username")}</h1>
      </div>
    );
  }
}

export default ConnectWallet;
