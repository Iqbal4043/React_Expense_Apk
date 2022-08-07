import React, {useState} from "react";

import './FirstComponents.css';

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const FirstComponents = (props) => {

    // const [newtitle, setNewTitle] = useState("");

    // const [title, setTitle] = useState(props.title);

    // let clickHandler = () => {
    //     setTitle(newtitle);
    // }

    // const changeHandler = (event) => {
    //     setNewTitle(event.target.value);
    // }

    return (
        <Card className='main-div'>
            <ExpenseDate date =  {new Date (props.date)} />
            <div className='div1'>
                {/* <h2>{ title }</h2> */}
                <h2>{ props.title }</h2>
                <div className='div2'>
                    ${props.amount}
                </div>
            </div>
            {/* <input type="text" value={ newtitle } onChange={changeHandler} />
            <button onClick={ clickHandler }>Change Title</button> */}
        </Card>
    );
}

export default FirstComponents