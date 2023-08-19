import { FlatList, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({ navigation }) => {
    //console.log('navigation : ', navigation);

    const renderCategoryItem = (itemData) => {
        //console.log(itemData);
        const pressHandler = () => {
            navigation.navigate('MealsOverview');
        };
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            //keyExtractor={(item, index) => index}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;
