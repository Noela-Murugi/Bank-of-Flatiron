import React , {useState} from "react";
// import Transaction from "./Transaction";

function AddTransactionForm(anewTransaction) {

  const [dataInfo, setDataInfo] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })

  const[date,setDate]= useState("")
  const[description,setDescription] = useState("")
  const[category,setCategory] = useState("")
  const[amount,setAmount] = useState("")
  const[add, setAdd] = useState([])

  function handleSubmit(event){
    // event.preventDefault();
    fetch(`http://localhost:8001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dataInfo
        date:dataInfo.date,
        description:dataInfo.description,
        category:dataInfo.category,
        amount:dataInfo.amount
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
    .then((info)=>anewTransaction =(info))
    console.log(dataInfo);
    const info =[date, description, category, amount]
    if(date&&description&&category&&amount){
      setAdd((dataInfo)=>[...dataInfo,info])
      setDate("")
      setDescription("")
      setCategory("")
      setAmount("")
    }
  }

  function handleChange(event){
    const val = event.target.name
     setDataInfo({...dataInfo, [val] : event.target.value})
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={dataInfo.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={dataInfo.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={dataInfo.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={dataInfo.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
      {
        add.map((dataInfo)=>
        <table>
          <tbody>
            <tr>
            <th>{dataInfo.date}</th>
            <th>{dataInfo.description}</th>
            <th>{dataInfo.category}</th>
            <th>{dataInfo.amount}</th>
            </tr>
          </tbody>
        </table>)
      }
    </div>
  );
}

export default AddTransactionForm;
