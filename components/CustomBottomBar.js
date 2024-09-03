import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const CustomTabBar = (props) => {
    return (
        <BottomTabBar {...props} style={styles.tabBar} />
    );
};

const styles = StyleSheet.create({
    tabBar: {
        borderTopWidth: 0,
        elevation: 0, 
        shadowOpacity: 0, 
    },
});

export default CustomTabBar;
