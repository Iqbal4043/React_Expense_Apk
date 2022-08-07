import React from "react";

import "./Expenses.css";

import FirstComponents from "./Firstomponents";

import Card from "../UI/Card";

const Expenses = (props) => {
    return(
        <Card className="Expenses">

            {
                props.item.map(
                    expense => (
                        <FirstComponents
                        key = {expense.id}
                        date = { expense.date}
                        title = { expense.title}
                        amount = { expense.amount}  />
                    )
                )
            }
           

            {/* <FirstComponents
                date = { props.item[0].date}
                title = { props.item[0].title}
                amount = { props.item[0].amount}  />

            <FirstComponents
                date = { props.item[1].date}
                title = { props.item[1].title}
                amount = { props.item[1].amount}/>  

            <FirstComponents
                date = { props.item[2].date}
                title = { props.item[2].title}
                amount = { props.item[2].amount}  /> 

            <FirstComponents
                date = { props.item[3].date}
                title = { props.item[3].title}
                amount = { props.item[3].amount} /> */}
        </Card>
    );
}

export default Expenses;