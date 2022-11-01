import React from "react";
import { transanctions } from "../../utilities";

function PortfolioTable() {
  return (
    <div className="">
      <table className="w-full  overflow-scroll">
        <thead className="font-semibold text-lg">
          <td>txHash</td>
          <td>txType</td>
          <td>Amount($)</td>
          <td>Date</td>
        </thead>
        {transanctions.map((item) => (
          <tr key={item.id}>
            <td>{item.txHash}</td>
            <td className="">
              {item.type === "credit" ? (
                <i class="ri-arrow-up-down-line text-xl ml-4 text-green-500"></i>
              ) : (
                <i class="ri-arrow-up-down-line text-xl ml-4 text-red-500"></i>
              )}
            </td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PortfolioTable;
