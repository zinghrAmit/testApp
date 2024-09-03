import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const BookingScreen = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        address: '',
        message: ''
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
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    value={form.message}
                    onChangeText={(text) => handleChange('message', text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    We will reach out to you once we receive your booking request. Our team is dedicated to providing the best service and will get back to you within 24 hours. 
                </Text>
                <Text style={styles.infoText}>
                    Please make sure that the contact details provided are correct, as we will use them to confirm your booking and provide further instructions.
                </Text>
                <Text style={styles.infoText}>
                    If you have any specific requirements or requests, feel free to mention them in the message field, and we will do our best to accommodate them.
                </Text>
                <Text style={styles.callToAction}>
                    Thank you for choosing our service! We look forward to serving you.
                </Text>
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
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1683a8',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
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
    infoContainer: {
        marginTop: 30,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        textAlign: "center"
    },
    infoText: {
        fontSize: 12,
        color: '#555',
        marginBottom: 10,
        lineHeight: 22,
        textAlign: "center"
    },
    callToAction: {
        fontSize: 16,
        color: '#1683a8',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
});

export default BookingScreen;
