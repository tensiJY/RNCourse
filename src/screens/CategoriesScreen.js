import * as React from 'react';
import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import {CATEGORIES} from '../data/dummy-data';

function renderCategoryItem({item, navigation}) {
  console.log(`renderCategoryItem : ${item.id}`);
  function pressHandler() {
    navigation.navigate('MealsOverView', {
      categoryId: item.id,
    });
  }

  return (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={pressHandler}
    />
  );
}

function CategoriesScreen({navigation}) {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={itemData =>
          renderCategoryItem({item: itemData.item, navigation})
        }
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
