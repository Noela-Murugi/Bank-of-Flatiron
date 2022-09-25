import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {



  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm newTransactions={addTransaction}/>
      <TransactionsList transactions={transactions} deleteTransactions={deleteTransact}/>
    </div>
  );
}

export default AccountContainer;
