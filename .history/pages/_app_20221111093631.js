import { useRouter } from "next/router";
import Dashboard from "../components/layout/Dashboard";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import ToggleContext from "../components/context/Toggle";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
  chain,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { MoralisProvider } from "react-moralis";
import { ContractContext } from "../components/context/contract";

const bscChain = {
  id: 97,
  name: "Smart Chain - Testnet",
  network: "Smart Chain - Testnet",
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockexplorer: {
    default: "https://testnet.bscscan.com",
  },
  testnet: true,
};

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <MoralisProvider serverUrl={"http://localhost:1337/server"} appId={"001"}>
        <WagmiConfig client={client}>
          <SessionProvider session={pageProps.session} refetchInterval={0}>
            <ContractContext>
              <ToggleContext>
                <Dashboard>
                  <Component {...pageProps} />
                </Dashboard>
              </ToggleContext>
            </ContractContext>
          </SessionProvider>
        </WagmiConfig>
      </MoralisProvider>
    );
  }
  return (
    <MoralisProvider serverUrl={"http://localhost:1337/server"} appId={"001"}>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />{" "}
        </SessionProvider>{" "}
      </WagmiConfig>
    </MoralisProvider>
  );
}

export default MyApp;
