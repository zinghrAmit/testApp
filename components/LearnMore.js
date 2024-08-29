import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const learnImg = require('../assets/images/learn.jpg');
const arrowImg = require('../assets/images/favicon.png');

const LearnMore = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>About Our App</Text>
                <Image
                    source={ learnImg }
                    style={styles.image}
                />
                <Text style={styles.description}>
                    Our app is designed to provide an exceptional user experience by offering seamless navigation and a variety of features that cater to your needs. Whether you're looking to explore new possibilities or manage your daily tasks, our app has got you covered.
                </Text>
            </View>

            <View style={styles.featuresSection}>
                <Text style={styles.sectionTitle}>Key Features</Text>
                <View style={styles.feature}>
                    <Image
                        source={ arrowImg }
                        style={styles.featureImage}
                    />
                    <View style={styles.featureText}>
                        <Text style={styles.featureTitle}>Feature 1</Text>
                        <Text style={styles.featureDescription}>
                            Explore our first feature that allows you to easily manage your tasks and stay organized.
                        </Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <Image
                        source={ arrowImg }
                        style={styles.featureImage}
                    />
                    <View style={styles.featureText}>
                        <Text style={styles.featureTitle}>Feature 2</Text>
                        <Text style={styles.featureDescription}>
                            Our second feature offers advanced analytics to help you track your progress effectively.
                        </Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <Image
                        source={ arrowImg }
                        style={styles.featureImage}
                    />
                    <View style={styles.featureText}>
                        <Text style={styles.featureTitle}>Feature 3</Text>
                        <Text style={styles.featureDescription}>
                            Discover how our app can connect you with like-minded individuals and build a community.
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.callToActionText}>Ready to get started?</Text>
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    featuresSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 20,
        textAlign: 'center',
    },
    feature: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    featureImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    featureText: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 14,
        color: '#666',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 25,
        padding: 20,
    },
    callToActionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    getStartedButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%', // Ensure button takes full width
    },
    getStartedButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LearnMore;
