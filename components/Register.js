import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.input} placeholder="Full Name" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Register;
