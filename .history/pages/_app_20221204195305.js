import { useRouter } from "next/router";
import Dashboard from "../components/layout/Dashboard";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import ToggleContext from "../components/context/Toggle";
import dynamic from "next/dynamic";

const ContractProvider = dynamic(
  () => import("../components/context/contract"),
  { ssr: false }
);

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
