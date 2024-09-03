import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const image = require('../assets/images/feature2.jpg');

const Register = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                style={styles.image}
                source={ image } 
            />
            <Text style={styles.welcomeText}>Welcome to Our Community!</Text>
            <Text style={styles.description}>
                Register now to get access to exclusive content, updates, and connect with others in our community.
            </Text>
            
            <Text style={styles.title}>Create Your Account</Text>

            <TextInput 
                style={styles.input} 
                placeholder="Full Name" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                keyboardType="email-address" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry 
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {/* Terms and Conditions */}
            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                    By registering, you agree to our Terms of Service and Privacy Policy. Please ensure your information is accurate and up to date.
                </Text>
            </View>

            <Text style={styles.safeNote}>
                Your data is 100% safe with us
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 100,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        lineHeight: 22,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        backgroundColor: '#1683a8',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    termsContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
    },
    termsText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        lineHeight: 20,
    },
    safeNote: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        lineHeight: 22,
        marginTop: 80
    }
});

export default Register;
