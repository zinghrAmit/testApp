import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
const background = require('../assets/images/bg.jpg');
const one = require('../assets/images/feature1.jpg');
const two = require('../assets/images/feature2.jpg');

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://your-brand-logo-url.com/logo.png' }}
                        style={styles.logo}
                    />
                    <Text style={styles.greeting}>Welcome to Our App!</Text>
                    <Text style={styles.subheading}>Discover amazing features and enjoy your experience</Text>
                </View>

                <View style={styles.featureSection}>
                    <TouchableOpacity style={styles.featureCard}>
                        <Image
                            source={ one }
                            style={styles.featureImage}
                        />
                        <Text style={styles.featureTitle}>Feature 1</Text>
                        <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureCard}>
                        <Image
                            source={ two }
                            style={styles.featureImage}
                        />
                        <Text style={styles.featureTitle}>Feature 2</Text>
                        <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.actionSection}>
                    <TouchableOpacity 
                        style={styles.actionButton} 
                        onPress={() => navigation.navigate('Get Started')}
                    >
                        <Text style={styles.actionButtonText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.actionButton} 
                        onPress={() => navigation.navigate('Learn More')}
                    >
                        <Text style={styles.actionButtonText}>
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Optional: This will resize the background image to cover the entire screen
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(245, 245, 245, 0.8)', // Optional: Add a semi-transparent overlay to improve text readability
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    featureSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    featureCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        width: '48%',
        padding: 15,
        alignItems: 'center',
    },
    featureImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
    actionSection: {
        alignItems: 'center',
    },
    actionButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: '80%',
    },
    actionButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
