import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const BookingScreen = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        address: '',
    });

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Booking details:', form);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Request a Booking</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={form.fullName}
                    onChangeText={(text) => handleChange('fullName', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={form.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={form.phoneNumber}
                    onChangeText={(text) => handleChange('phoneNumber', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    keyboardType="numeric"
                    value={form.age}
                    onChangeText={(text) => handleChange('age', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value={form.address}
                    onChangeText={(text) => handleChange('address', text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50, // Increased height
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
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

export default BookingScreen;
