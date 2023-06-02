import { StyleSheet, Text, View, Pressable } from 'react-native';
//  Touchable ~는 옛날 버전, Pressable로 사용

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.data.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.data.item.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        color: 'red',
    },
});

export default GoalItem;
