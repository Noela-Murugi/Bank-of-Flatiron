import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [copy, setCopy] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {

        setCopy(data)
        setTransactions(data)});
  }, []);
  console.log(transactions);

  function addTransacfinfor(newTransaction) {
    const update = [...transactions, newTransaction];
    setTransactions(update);
  }

  //Delete transaction
  function deleteTransact(id) {
    const update = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(update);
  }

  function handleSearch(event){
    let search = event.target.value.toLowerCase()
    //  const somevalue = undefined
    // const val = somevalue || ""
    setTransactions(copy.filter(val=>val.description.toLowerCase().includes(search)))
    console.log(handleSearch)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm anewTransaction={addTransacfinfor} />
      <TransactionsList
        transactions={transactions}
        deleteTransactions={deleteTransact}
      />
    </div>
  );
}

export default AccountContainer;
