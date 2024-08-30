import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comp from '../index';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={comp.HomeScreen} />
            <Stack.Screen name="LearnMore" component={comp.LearnMore} />
            <Stack.Screen name="GetStarted" component={comp.GetStarted} />
            <Stack.Screen name="Register" component={comp.Register} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
