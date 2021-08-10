import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
     {filteredExpenses.length === 0? <h2 >Found no expenses.</h2>
  :filteredExpenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
