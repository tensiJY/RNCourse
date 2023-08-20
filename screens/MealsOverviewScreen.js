import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverViewScreen({ navigation, route }) {
    // React Navigation에서 Screen으로 등록된 컴포넌트라면
    // navigation
    // route
    // route 안에는 params 프로퍼티가 있다
    //console.log(navigation);
    //console.log(route);
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    //console.log(displayedMeals);

    function renderMealItem(itemData) {
        console.log(itemData);

        return <MealItem title={itemData.item.title} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(meal) => meal.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
