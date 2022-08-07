import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState(""); 

    const onChangeTitle = (event) => {
        setEnteredTitle(event.target.value);
    }

    const OnChangeAmount = (event) => {
        setEnteredAmount(event.target.value);
    }

    const onChangeDate = (event) => [
        setEnteredDate(event.target.value)
    ]

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
            
        }

        props.onsave(ExpenseData);

        setEnteredTitle(" ");
        setEnteredAmount(" ");
        setEnteredDate(" ");

        // console.log(ExpenseData);
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="main-div">
                <div className="main-div-first">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={onChangeTitle} />
                </div>
            </div>

            <div className="main-div">
                <div className="main-div-first">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={OnChangeAmount} />
                </div>
            </div>

            <div className="main-div">
                <div className="main-div-first">
                    <label>Date</label>
                    <input type="date" value={enteredDate}  onChange={onChangeDate} />
                </div>
            </div>
            <div className="main-div-action">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;
