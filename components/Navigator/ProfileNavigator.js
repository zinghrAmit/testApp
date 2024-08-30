import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comp from '../index';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={comp.ProfileScreen} />
            <Stack.Screen name="Register" component={comp.Register} />
            <Stack.Screen name="Login" component={comp.Login} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;
