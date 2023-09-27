import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VectorIconButton from '../components/Common/VectorIconButton';
import {GlobalStyles} from '../constants/styles';
import Button from '../components/Common/Button';
import {ExpenseContext} from '../store/expenses-context';

const ManageExpense = ({route, navigation}) => {
  const expensesCtx = React.useContext(ExpenseContext);
  //console.log(route);
  const expenseId = route.params?.expenseId;
  console.log(expenseId);

  const isEditing = !!expenseId;
  console.log(isEditing);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense ' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(expenseId);
    close();
  }

  function cancelHandler() {
    close();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(expenseId, {
        description: 'Test!!',
        amount: 18.0,
        date: new Date(),
      });
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 18.0,
        date: new Date(),
      });
    }
    close();
  }

  function close() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <VectorIconButton
            name="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
