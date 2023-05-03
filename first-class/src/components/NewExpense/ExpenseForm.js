import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /*  This is the old way which is very valid also
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); */

  /* This is the correct way */
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredTitle(event.target.value);
    /* This method have side effects when there is many states to update
    setUserInput({
        ...userInput,
      enteredTitle: event.target.value
    }); */

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: userInput.enteredDate
    }

    console.log(expensesData);

    // passing the data from child component to parent component
    props.onSaveExpenseData(expensesData);

    // clearing the form again
    setUserInput((prevState) => {
        return { ...prevState, enteredTitle: '', enteredAmount: '', enteredDate: ''}
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
