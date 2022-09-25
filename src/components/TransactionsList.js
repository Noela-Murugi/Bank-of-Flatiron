import React from "react";
import Transaction from "./Transaction";

function TransactionsList({
  transactions,
  deleteTransactions,
  setTransactions,
  search,
}) {
  let listtransaction = "Load transaction...";

  if (transactions) {
    const tfilter = transactions.filter((transaction) => {
      return transaction.description;
    });

    listtransaction = tfilter.map((transaction) => {
      return (
        <Transaction
          transaction={transactions}
          setTransactions={setTransactions}
          key={transaction.id}
          date={transaction.date}
          description={transaction.description}
          category={transaction.category}
          amount={transaction.amount}
          id={transaction.id}
          deleteTransactions={deleteTransactions}
        />
      );
    });
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description<i className="fa-solid fa-sort"></i>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category<i className="fa-solid fa-sort"></i>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
        {listtransaction}
      </tbody>
    </table>
  );
}

export default TransactionsList;
