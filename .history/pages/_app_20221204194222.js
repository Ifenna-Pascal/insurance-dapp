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
  return <Component {...pageProps} />;
}

export default MyApp;
