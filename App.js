import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

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
                        component={CategoriesScreen}
                        options={{
                            title: 'all categories',
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverView"
                        component={MealsOverViewScreen}
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
