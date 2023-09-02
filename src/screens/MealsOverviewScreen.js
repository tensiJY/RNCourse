import * as React from 'react';
import {useLayoutEffect} from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverViewScreen({navigation, route}) {
  // React Navigation에서 Screen으로 등록된 컴포넌트라면
  // navigation
  // route
  // route 안에는 params 프로퍼티가 있다
  //console.log(navigation);
  //console.log(route);
  const {categoryId} = route.params;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  //console.log(displayedMeals);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverViewScreen;
