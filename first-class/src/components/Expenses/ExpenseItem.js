import "./ExpenseItem.css";
import ExpressDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!!")
  }
  return (
    <Card className="expense-item">
      <ExpressDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
