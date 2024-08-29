import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const profile = require('../assets/images/profile.jpg');

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={ profile } 
                style={styles.profilePicture}
            />
            <Text style={styles.heading}>Profile Screen</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Full Name:</Text>
                <Text style={styles.infoValue}>John Doe</Text>

                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>john.doe@example.com</Text>

                <Text style={styles.infoLabel}>Phone Number:</Text>
                <Text style={styles.infoValue}>123-456-7890</Text>

                <Text style={styles.infoLabel}>Age:</Text>
                <Text style={styles.infoValue}>30</Text>
                
                <Text style={styles.infoLabel}>Address:</Text>
                <Text style={styles.infoValue}>123 Main Street, Anytown, USA</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#007bff',
        alignSelf: 'center',
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoValue: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
