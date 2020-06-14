import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

export const GbContext = createContext(initialState);

let AppReducer = (state, action) => {
  switch (action.type) {
    case `DELETE_TRANSACTION`:
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      console.log(action.payload, "<-----");
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export const GbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function dltTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    console.log("Hassan jihadi ->>>>>>>>>>>>>>>", transaction);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GbContext.Provider
      value={{
        transactions: state.transactions,
        dltTransaction,
        addTransaction,
      }}
    >
      {children}
    </GbContext.Provider>
  );
};
