import { useRouter } from "next/router";
import Dashboard from "../components/layout/Dashboard";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import ToggleContext from "../components/context/Toggle";
import ContractProvider from "../components/context/contract";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ContractProvider>
        <ToggleContext>
          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
        </ToggleContext>
      </ContractProvider>
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
