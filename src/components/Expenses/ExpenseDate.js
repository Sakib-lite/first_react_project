import './ExpenseDate.css'
function ExpenseDate(props) { 
     const day=props.date.toLocaleString('en-US',{day:'2-digit'});
const month=props.date.toLocaleString('en-US',{month:'long'});
const year=props.date.getFullYear();
     
     return(

<div>
<div className="expense-date__day whiteColor">{day}</div>
<div className="expense-date__month whiteColor">{month}</div>
<div className="expense-date__year whiteColor">{year}</div>
      </div>

)}

export default ExpenseDate