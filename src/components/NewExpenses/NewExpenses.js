import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  
//stateUpLifting
  const expenseFormSendHadler = (newExpenses) => {
    const expenseData = {
      ...newExpenses,
    };
    props.onRecieveExpenseForm(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSendExpenseForm={expenseFormSendHadler} />
    </div>
  );
}

export default NewExpenses;
