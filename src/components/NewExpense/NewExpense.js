import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = (e) => {
    setShowExpenseForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className='new-expense'>
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={showExpenseFormHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
