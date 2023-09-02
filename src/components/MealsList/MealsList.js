import * as React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

function renderMealItem(itemData) {
  const item = itemData.item;

  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
  };
  return <MealItem {...mealItemProps} />;
}

function MealsList({items}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={meal => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
