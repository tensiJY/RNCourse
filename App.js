import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

import uuid from 'react-native-uuid';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((prev) => {
            return [
                ...prev,
                {
                    text: enteredGoalText,
                    id: uuid.v4(),
                },
            ];
        });
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#5e0acc"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                    visible={modalIsVisible}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={courseGoals}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    //text={itemData.item.text}
                                    //id={itemData.item.id}
                                    data={itemData}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    goalsContainer: {
        flex: 5,
    },
});
