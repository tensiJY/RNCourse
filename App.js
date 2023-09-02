import * as React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

import {createDrawerNavigator} from '@react-navigation/drawer';

import FavoritesScreen from './src/screens/FavoritesScreen';

const Drawer = createDrawerNavigator();

import FavoritesContextProvider from './src/store/context/favorites-context';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './src/components/IconButton';

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          //   drawerIcon: ({ color, size }) => (
          //     <Ionicons name="list" color={color} size={size} />
          //   ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          // title: 'aa',
          drawerIcon: ({color, size}) => {},
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#351401" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //     const categoryId = route.params.categoryId;
              //     return {
              //         title: categoryId,
              //     };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{
              //   headerRight: ({navigation, route, options, back}) => {
              //     console.log(options);
              //     return '';
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
