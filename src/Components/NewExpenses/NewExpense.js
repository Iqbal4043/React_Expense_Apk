import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const savedata = (RcvData) => {

        const savedatastore = {
            ...RcvData,
            id: Math.random().toString()
        }

        props.dataSend(savedatastore);
        console.log(savedatastore);
    };

    return(
        <div className="main-div">
            <ExpenseForm onsave={savedata} />
        </div>
    );

    
}

export default NewExpense;