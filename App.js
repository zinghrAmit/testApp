import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import comp from './components/index';
import { ThemeProvider } from './components/Theme_Context/Theme';
import { ImageBackground } from 'react-native-web';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <>
            <comp.Topbar />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (route.name === 'Bookings') {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: '#efefef',
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 60,
                        paddingBottom: 10,
                        paddingTop: 5,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 5,
                    },
                    tabBarItemStyle: {
                        paddingBottom: 5,
                    },
                })}
            >
                <Tab.Screen name="Home" component={comp.HomeNavigator} />
                <Tab.Screen name="Bookings" component={comp.BookingScreen} />
                <Tab.Screen name="Profile" component={comp.ProfileNavigator} />
                <Tab.Screen name="Settings" component={comp.SettingsScreen} />
            </Tab.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
});

export default App;
