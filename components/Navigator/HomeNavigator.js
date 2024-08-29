import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comp from '../index';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={comp.HomeScreen} />
            <Stack.Screen name="Learn More" component={comp.LearnMore} />
            <Stack.Screen name="Get Started" component={comp.GetStarted} />
            <Stack.Screen name="Register" component={comp.Register} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
