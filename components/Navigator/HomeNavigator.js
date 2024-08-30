import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comp from '../index';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={comp.HomeScreen} />
            <Stack.Screen name="Learn More" component={comp.LearnMore} />
            <Stack.Screen name="Get Started" component={comp.GetStarted} />
            <Stack.Screen name="Register" component={comp.Register} />
            <Stack.Screen name="Feature One" component={comp.FeatureOne} />
            <Stack.Screen name="Feature Two" component={comp.FeatureTwo} />
            <Stack.Screen name="Feature Three" component={comp.FeatureThree} />
            <Stack.Screen name="Feature Four" component={comp.FeatureFour} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
