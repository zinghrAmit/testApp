import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SettingsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>General Settings</Text>
                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Enable Notifications</Text>
                    <Switch 
                        value={true} 
                        onValueChange={(value) => console.log('Notifications:', value)} 
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Dark Mode</Text>
                    <Switch 
                        value={false} 
                        onValueChange={(value) => console.log('Dark Mode:', value)} 
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Settings</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => console.log('Change Password')}
                >
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => console.log('Update Email')}
                >
                    <Text style={styles.buttonText}>Update Email</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Privacy Settings</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => console.log('Manage Privacy')}
                >
                    <Text style={styles.buttonText}>Manage Privacy</Text>
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
    section: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    settingLabel: {
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SettingsScreen;
