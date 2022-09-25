import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")
  // fetch transaction
  useEffect(() =>{
    fetch ("http://localhost:8001/transactions")
    .then((response)=>response.json())
    .then(data => setTransactions(data));

  },[])
  console.log(transactions);
//new transaction
function addTransaction (newTransaction) {
  const updatedTransactions = [...transactions, newTransaction]
  setTransactions(updatedTransactions);
}


  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm newTransactions={addTransaction}/>
      <TransactionsList transactions={transactions} deleteTransactions={deleteTransact}/>
    </div>
  );
}

export default AccountContainer;
