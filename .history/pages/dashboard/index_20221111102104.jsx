import React, { useContext, useEffect } from "react";
import AllTable from "../../components/dashboard/AllTable";
import Card from "../../components/dashboard/Card";
import { getSession, signOut } from "next-auth/react";
import { useMoralis } from "react-moralis";
import { sliceAddrees } from "../../utilities/slice_address";
import Icons from "../../components/Icons";
import { ToggleContext } from "../../components/context/Toggle";
import { ContractContext } from "../../components/context/contract";
function Profile({ user }) {
  const { setExpand, expand } = useContext(ToggleContext);
  const {} = useContext(ContractContext);
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div className="grid grid-cols-3 gap-4 gap-x-8">
        <Card header={"Total Portfolios"} value={10} />
        <Card header={"Total Amount"} value={"$ 30,000"} />
        <Card header={"Wallet Address"} value={sliceAddrees(user?.address)} />
        <button onClick={() => signOut({ redirect: "/" })}>Sign out</button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-white font-Poppins tracking-wider font-semibold text-2xl mt-16 mb-4">
          All Insurance Porfolio
        </h1>
        <Icons
          icon={`${"add-fill"}`}
          hover="hover:bg-tetiary duration-300"
          onClick={() => setExpand(!expand)}
        />
      </div>
      <AllTable />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default Profile;
