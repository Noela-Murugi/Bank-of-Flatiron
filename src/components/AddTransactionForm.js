import React , {useState} from "react";


function AddTransactionForm(newTransactions,id) {

  const [dataInfo, setDataInfo] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })

  function handleSubmit(event){
    event.preventDefault();
    fetch(`http://localhost:8001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({dataInfo

        // addFormFields(){
        //   setDataInfo([...dataInfo, {
        //     date:"",
        //     description:"",
        //     category:"",
        //     amount:""
        //   }])
        //  }
      })
    })
    .then((response)=>response.json())
    .then((infor)=>newTransactions =(infor))
    console.log(dataInfo);
  }

 
}

export default AddTransactionForm;
