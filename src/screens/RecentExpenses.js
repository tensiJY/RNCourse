import React from 'react';
import {View, Text, Button} from 'react-native';
import VectorIcon from '../components/Common/VectorIcon';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = React.useContext(ExpenseContext);
  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses"
    />
  );
};

export default RecentExpenses;
