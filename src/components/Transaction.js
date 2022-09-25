import React from "react";

function Transaction({id, date, description, category, amount, deleteTransactions}) {

  function handleDeleteTransaction(){
    fetch (`http://localhost:8001/transactions/${id}`, {
      method: "DELETE"
    })
    deleteTransactions(id);
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
