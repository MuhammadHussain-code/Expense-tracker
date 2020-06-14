import React, { useState, useContext } from "react";
import AddTran from "./addTran";
import { GbContext } from "../GbContext/gbContext";

function Home() {
  let [amount, setAmount] = useState(0);
  let [title, setTitle] = useState("");

  const { transactions, addTransaction } = useContext(GbContext);
  // console.log(transactions, "transaction should be here");

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(transactions);
    const newTrans = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
    };
    addTransaction(newTrans);
  };
  // console.log(addTransaction, "function should be here");

  let allAmounts = transactions.map((trans) => trans.amount);

  // console.log(amount, "amount here");

  let total = allAmounts
    .reduce((acc, item) => {
      // console.log(`acc ${acc} and items ${item}`);
      return (acc += item);
    }, 0)
    .toFixed(2);

  const income = allAmounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    allAmounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="text-white text-center">
      <div className="border border-right-0 border-top-0 border-left-0 py-2">
        <h1 className="exp-h">Expense Tracker</h1>
      </div>
      <div>
        <p className="exp-h h2">Your Balance</p>
        <span
          className={`balance ${total > 0 ? "text-success" : "text-danger"}`}
        >
          {total + " PKR"}
        </span>
      </div>
      <div className="row mx-2">
        <div className="col-md-4"></div>
        <div className=" text-center col-md-4 backg ">
          <div className="border border-dark px-3 border-left-0">
            <h2>Income</h2>
            <span className="text-success otherBln">{income + " PKR"}</span>
          </div>
          <div className="border border-dark px-3 border-right-0">
            <h2>Expense</h2>
            <span className="text-danger otherBln">{expense + " PKR"}</span>
          </div>
          <div>
            <h4 className="text-left mt-3">History</h4>

            {transactions.map((transaction) => (
              <AddTran key={transaction.id} transaction={transaction} />
            ))}

            <hr className="bg-light" />
            <form onSubmit={handleForm} className="text-left">
              <h4 className="text-left mt-3">Add Transactions</h4>
              <hr className="bg-light" />
              <label htmlFor="text" className="h5 ">
                Text
              </label>
              <br />
              <input
                type="text"
                className="w-100 p-2"
                autoComplete="false"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Type Description"
                required
              />
              <br />
              <label htmlFor="number" className="h5 mt-2">
                Amount
              </label>
              <br />
              <input
                type="number"
                className="w-100 p-2"
                placeholder="Positive for Income & Negative for Expense"
                autoComplete="false"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <br />
              <button className="btn btn-light w-100 my-2 font-weight-bold">
                Add Transaction
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Home;
