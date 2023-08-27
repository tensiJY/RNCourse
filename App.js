import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// import FavoriteScreen from './screens/FavoriteScreen';

// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//     return (
//         <Drawer.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#351401',
//                 },
//                 headerTintColor: 'white',
//                 contentStyle: {
//                     backgroundColor: '#3f2f25',
//                 },
//             }}
//         >
//             <Drawer.Screen name="Categories" componenet={CategoriesScreen} />
//             <Drawer.Screen name="Favorite" componenet={FavoriteScreen} />
//         </Drawer.Navigator>
//     );
// }

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#351401',
                        },
                        headerTintColor: 'white',
                        contentStyle: {
                            backgroundColor: '#3f2f25',
                        },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        //component={DrawerNavigator}
                        component={CategoriesScreen}
                        options={{
                            //title: 'all categories',
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
                        //     headerRight: () => {
                        //         return <Text>In the Header</Text>;
                        //     },
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
