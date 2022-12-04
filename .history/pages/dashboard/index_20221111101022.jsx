import React, { useEffect } from "react";
import AllTable from "../../components/dashboard/AllTable";
import Card from "../../components/dashboard/Card";
import { getSession, signOut } from "next-auth/react";
import { useMoralis } from "react-moralis";
function Profile({ user }) {
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div className="grid grid-cols-3 gap-4 gap-x-8">
        <Card header={"Total Portfolios"} value={10} />
        <Card header={"Total Amount"} value={"$ 30,000"} />
        <Card header={"Capped Amount"} value={"$ 70,000"} />
        <button onClick={() => signOut({ redirect: "/" })}>Sign out</button>
      </div>
      <h1 className="text-white font-Poppins tracking-wider font-semibold text-2xl mt-16 mb-4">
        All Insurance Porfolio
      </h1>
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
