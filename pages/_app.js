import { useRouter } from "next/router";
import Dashboard from "../components/layout/Dashboard";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import ToggleContext from "../components/context/Toggle";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname.startsWith("/dashboard")) {
    return (
      <ToggleContext>
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </ToggleContext>
    );
  }
  <Component {...pageProps} />;
}

export default MyApp;
