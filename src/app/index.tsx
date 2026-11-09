import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    // This sets up a simple memory state for our counter
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Counter </Text>

            {/* The number display */}
            <Text style={styles.counterNumber}>{count}</Text>

            {/* A modern clickable button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.buttonText}>Tap Me!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },
    counterNumber: {
        color: '#0a84ff',
        fontSize: 80,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#30d158',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        elevation: 3, // Adds a subtle shadow on Android
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
