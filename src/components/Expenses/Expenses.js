import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses(props) {
  const [displayYear, setDisplayYear] = useState('2021');

  const yearChangeHandler = (yearSelected) => {
    setDisplayYear(yearSelected);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === displayYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          onYearChange={yearChangeHandler}
          displayYear={displayYear}
        />
        <ExpensesList expenses={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
