import { Image, StyleSheet, Platform, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Card } from 'react-native-paper';

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Profile</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Personal data</ThemedText>
                <ThemedText>
                    <ThemedText type="defaultSemiBold">Name: </ThemedText> nome
                    <ThemedText type="defaultSemiBold">
                        {' '}
                        {Platform.select({ ios: 'you are using an apple, are you hungry?', android: 'you are using an android, are you a robot?' })}
                    </ThemedText>{' '}
                    That's ok...
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">You are a Local Legend for:</ThemedText>
                <ThemedText>
                    - Turin
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Become a Local Legend for something else</ThemedText>
                <ThemedText>
                    When you're ready, run
                </ThemedText>
            </ThemedView>
            <Button
                onPress={() => {
                    console.log('You tapped the button!');
                }}
                title="Become a Local Legend"
            />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
