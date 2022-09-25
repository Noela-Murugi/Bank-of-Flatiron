import React from "react";

function Transaction({id, date, description, category, amount, deleteTransactions}) {

  function handleDeleteTransaction(){
    fetch (`http://localhost:8001/transactions/${id}`, {
      method: "DELETE"
    })
    deleteTransactions(id);
  }

  
}

export default Transaction;
