import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const background = require('../assets/images/bg.jpg');
const backgroundTwo = require('../assets/images/bg2.jpg');
const one = require('../assets/images/feature1.jpg');
const two = require('../assets/images/feature2.jpg');

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={backgroundTwo}
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
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.featureContainer}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate('Feature One')}>
                            <View style={styles.featureCard}>
                                <Image
                                    source={one}
                                    style={styles.featureImage}
                                />
                                <Text style={styles.featureTitle}>Feature 1</Text>
                                <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Feature Two')}>
                            <View style={styles.featureCard}>
                                <Image
                                    source={two}
                                    style={styles.featureImage}
                                />
                                <Text style={styles.featureTitle}>Feature 2</Text>
                                <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Feature Three')}>
                            <View style={styles.featureCard}>
                                <Image
                                    source={one}
                                    style={styles.featureImage}
                                />
                                <Text style={styles.featureTitle}>Feature 3</Text>
                                <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Feature Four')}>
                            <View style={styles.featureCard}>
                                <Image
                                    source={two}
                                    style={styles.featureImage}
                                />
                                <Text style={styles.featureTitle}>Feature 4</Text>
                                <Text style={styles.featureDescription}>Description of the feature and its benefits.</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
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
                        <Text style={styles.actionButtonText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
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
        marginBottom: 20,
    },
    featureContainer: {
        paddingVertical: 10,
    },
    featureCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        width: 195,
        height: 240,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    featureImage: {
        width: "100%",
        height: 120,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    featureDescription: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
        height: 40,
        overflow: 'hidden',
    },
    actionSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    actionButton: {
        backgroundColor: '#1683a8',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: '80%',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }
    },
    actionButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
