import React from 'react';

import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = React.useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={'Total'}
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
