import Link from "next/link";
import React from "react";
import { portfolios } from "../../utilities";

function AllTable() {
  return (
    <div className="">
      <table className="w-full  overflow-scroll">
        <thead className="font-semibold text-lg">
          <td>Tx Hash</td>
          <td>Name</td>
          <td>Total Amount ($)</td>
          <td>No. of Tx</td>
          {/* <td>View More</td> */}
        </thead>
        {portfolios.map((item) => (
          <tr key={item.id}>
            <td>{item.txHash}</td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.tx}</td>
            <Link href={`/dashboard/${item.id}`}>
              {" "}
              <td>
                <i className="ri-more-line text-white text-lg"></i>
              </td>{" "}
            </Link>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AllTable;
