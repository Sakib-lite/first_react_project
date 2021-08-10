import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleHandler(e) {
    setEnteredTitle(e.target.value);
  }

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id:Math.random() * 100
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

     //stateUpLifting
    props.onSendExpenseForm(expenseData);
   
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={enteredTitle}
          type="text"
          name="title"
          onChange={titleHandler}
          required
        />
        <input
          min={0}
          value={enteredAmount}
          type="number"
          name="amount"
          onChange={amountHandler}
          required
        />
        <input
          value={enteredDate}
          type="date"
          name="date"
          onChange={dateHandler}
          min="2019-01-01" 
          required
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
