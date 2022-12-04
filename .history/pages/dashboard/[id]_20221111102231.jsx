import React, { useContext, useState } from "react";
import { ToggleContext } from "../../components/context/Toggle";
import Card from "../../components/dashboard/Card";
import PortfolioTable from "../../components/dashboard/PortfolioTable";
import RightBar from "../../components/dashboard/RightBar";
import Icons from "../../components/Icons";
import Form from "../../components/modal/Form";
import MoadalWrapper from "../../components/modal/Wrapper";

function Portfolio() {
  const { modal, modal } = useContext(ToggleContext);
  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4 gap-x-8">
        <Card header={"Portfolio Name"} value={"Lifely"} />
        <Card header={"Date Created"} value={"12/2/22"} />
        <Card header={"Total Savings"} value={"$ 30,000"} />
        <Card header={"Beneficiary"} value={"12312fsf....1232"} />
      </div>
      <div className="flex justify-between items-center mt-12">
        <h1 className="text-white font-Poppins tracking-wider font-semibold text-2xl">
          Transactions
        </h1>
        <Icons
          icon={`${expand ? "close-fill" : "menu-3-fill"}`}
          hover="hover:bg-tetiary duration-300"
          onClick={() => setExpand(!)}
        />
      </div>
      <PortfolioTable />
      <MoadalWrapper>
        <Form />
      </MoadalWrapper>
    </div>
  );
}

export default Portfolio;
