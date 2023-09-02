import * as React from 'react';
import {useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';

import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';

function MealDetailScreen({route, navigation}) {
  const favoriteMealsCtx = React.useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  console.log(favoriteMealsCtx.ids);
  console.log(mealIsFavorite);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeFavoriteStatusHandler = () => {
    console.log(`Button Pressed : ${selectedMeal.id} ${selectedMeal.title}`);
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => {
      //   return <Button title="info" onPress={headerButtonPressHandler} />;
      // },
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            name={mealIsFavorite ? 'star' : 'star-o'}
            color="white"
            size={12}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
