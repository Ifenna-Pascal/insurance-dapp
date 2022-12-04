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
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

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
      <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}></SessionProvider>
      <ToggleContext>
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </ToggleContext>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
