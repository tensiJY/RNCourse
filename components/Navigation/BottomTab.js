import UserScreen from '../../screens/UserScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Bottom.Navigator initialRouteName="home">
            <Bottom.Screen name="Welcome" component={WelcomeScreen} />
            <Bottom.Screen name="User" component={UserScreen} />
        </Bottom.Navigator>
    );
};

export default BottomTab;
