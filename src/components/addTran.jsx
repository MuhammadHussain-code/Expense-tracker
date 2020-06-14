import React, { useContext } from "react";
import { GbContext } from "../GbContext/gbContext";

function AddTran({ transaction }) {
  const { dltTransaction } = useContext(GbContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <div
        className={`border d-flex my-2 ${
          sign === "-" ? "border-danger" : "border-success"
        }`}
      >
        <button onClick={() => dltTransaction(transaction.id)}>x</button>
        <div className="mr-auto">{transaction.title}</div>{" "}
        <div className="ml-auto"> {`${transaction.amount} PKR`} </div>
      </div>
    </>
  );
}

export default AddTran;
