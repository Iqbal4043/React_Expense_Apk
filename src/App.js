import React, {useState, useEffect} from "react";

import Expenses from "./Components/Expenses/Expenses.js";

import NewExpense from "./Components/NewExpenses/NewExpense.js";

let Dummy_Data = [

    // if put the API link then comment down hard code data of array object (Dummy_Data like id:"e3" and id:"e4")
    
  {
    id: "e1",
    title: "School Fee",
    amount: 300,
    date: new Date(2021, 9, 20)
  },

  {
    id: "e2",
    title: "Car Insurance",
    amount: 250,
    date: new Date(2021, 2, 20)
  },

  // {
  //   id: "e3",
  //   title: "Food",
  //   amount: 150,
  //   date: new Date(2021, 5, 20)
  // },

  // {
  //   id: "e4",
  //   title: "Company Ads",
  //   amount: 400,
  //   date: new Date(2021, 12, 20)
  // }
];

const App = () => {

  const [FirstC, Setexpense] = useState(Dummy_Data);

  // FETCH API LINK BELOW(uncomment the function FetchData and hook useEffect)

  // function FetchData() {
  //   fetch('').then(
  //   response => {
  //     return response.json();
  //   }
  //   ).then(
  //     data => {
  //       Setexpense(data);
  //     }
  //   );
  // }

  // useEffect(() => {
  //   FetchData();
  // }, []);

  const StoreExpense = (RcvStroe) =>{

    // if put the API link then it comment down

    const NewExpense = [RcvStroe, ...FirstC];
      Setexpense(NewExpense);
    
    //When put API link uncomment the fetch function of POST method

    // fetch('', {
    //   method: "POST",
    //   body: JSON.stringify(RcvStroe),
    //   headers: {
    //     "content-type" : "application/json" 
    //   }
    // }).then(
    //   response => {
    //     fetchdata();
    //   }
    // );
  };


  return (
    <div>
      <NewExpense dataSend = {StoreExpense}/>
      <Expenses item={FirstC}/>
    </div>
    
  );
}

export default App;
