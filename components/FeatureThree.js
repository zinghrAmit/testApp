import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const featureImage = require('../assets/images/feature1.jpg');

const FeatureThree = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image
                    source={featureImage}
                    style={styles.featureImage}
                />
                <Text style={styles.title}>Feature 3</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    Experience the revolutionary Feature 1 that will transform your way of interacting with our app. 
                    This feature includes cutting-edge technology and offers numerous benefits that will enhance 
                    your productivity and enjoyment.
                </Text>
                
                <Text style={styles.detailsTitle}>Key Benefits:</Text>
                <Text style={styles.detailsText}>
                    - Benefit 1: Description of the benefit and how it helps users.
                    {'\n'}
                    - Benefit 2: Description of the benefit and how it enhances user experience.
                    {'\n'}
                    - Benefit 3: Description of the benefit and its impact on user satisfaction.
                </Text>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.goBack()} // Navigate back to the previous screen
                >
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    featureImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
    },
    content: {
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 14,
        color: '#888',
        lineHeight: 22,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FeatureThree;
