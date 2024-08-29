import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Topbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.brand}>Brand_Name</Text>
            <View style={styles.profileContianer}>
                <Icon name="user" size={24} color="#000" style={styles.icon} />
                {/* <Text>User_Name</Text> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#DDEFDC",
        padding: 16,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    brand: {
        fontWeight: "bold",
        fontSize: 16,
    },
    icon: {
        marginRight: 16,
        textAlign: "center"
    },
    profileContianer:{
        flexDirection: "column",
    }
});

export default Topbar;
