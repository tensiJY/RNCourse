import React from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import {GlobalStyles} from './src/constants/styles';
import VectorIcon from './src/components/Common/VectorIcon';
import VectorIconButton from './src/components/Common/VectorIconButton';
import ExpenseContextProvider from './src/store/expenses-context';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const BottomTabs = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white', // header title}
      }}>
      <Stack.Screen
        name="ExpnsesOverView"
        component={ExpensesOverView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All" component={AllExpenses} />
      <Drawer.Screen name="Manage" component={ManageExpense} />
    </Drawer.Navigator>
  );
}

function ExpensesOverView() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white', // header title

        // bottom tab bar
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        //  bottom tab active
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: ({tintColor}) => {
          console.log(tintColor);
          return (
            <VectorIconButton
              name="plus"
              size={24}
              color={tintColor}
              onPress={e => {
                navigation.navigate('ManageExpense');
              }}
            />
          );
        },
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent', // view name
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            //console.log(color, size);
            return <VectorIcon color={color} size={size} name="tumblr" />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses', // view name
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            //console.log(color, size);
            return <VectorIcon color={color} size={size} name="adn" />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar />
      <ExpenseContextProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
};

export default App;
