import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Linking, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const img = require('../assets/images/learn.jpg');
const bg = require('../assets/images/bg.jpg');

const GetStarted = () => {

    const navigation = useNavigation();

    const handleWhatsAppPress = () => {
        const whatsappUrl = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
        Linking.openURL(whatsappUrl).catch((err) => console.error("Couldn't load page", err));
    };

    return (
        <ImageBackground
            source={bg}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={img} // Replace with your logo URL
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Welcome to the Future</Text>
                    <Text style={styles.subtitle}>We’re excited to have you here. Discover amazing features and start your journey with us.</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>
                        Our app provides you with a seamless experience to manage your tasks efficiently. Enjoy personalized features, easy navigation, and a user-friendly interface.
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleWhatsAppPress}
                    >
                        <Ionicons name="logo-whatsapp" size={24} color="#ffffff" style={styles.icon} />
                        <Text style={styles.buttonText}>Chat with Us</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: "100%",
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#25D366', // WhatsApp green color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row', // Align icon and text horizontally
        justifyContent: 'center',
        width: '100%', // Ensure button takes full width
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10, // Space between icon and text
    },
    icon: {
        marginRight: 10, // Space between icon and text
    },
});

export default GetStarted;
