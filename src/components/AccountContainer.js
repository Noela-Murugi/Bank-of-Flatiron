import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);
  console.log(transactions);

  function infor(newTransaction) {
    const update = [...transactions, newTransaction];
    setTransactions(update);
  }

  //Delete transaction
  function deleteTransact(id) {
    const update = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(update);
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transactions} newTransactions={infor} />
      <TransactionsList
        transactions={transactions}
        deleteTransactions={deleteTransact}
      />
    </div>
  );
}

export default AccountContainer;
