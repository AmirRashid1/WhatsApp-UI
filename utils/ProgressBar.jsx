import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'

const ProgressBar = ({ setTimeUp }) => {
    const progressAnimation = useRef(new Animated.Value(0)).current;

    const animateProgress = () => {
        Animated.timing(progressAnimation, {
            toValue: 100,
            duration: 10000,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                setTimeUp();
                console.log('Animation stopped successfully');
            }
        });
    }

    useEffect(() => {
        animateProgress();
    }, []);

    return (
        <View>
            <Animated.View
                style={[styles.progress, {
                    width: progressAnimation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%'],
                    }),
                }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    progress: {
        height: 3,
        backgroundColor: 'green', // Adjust the color as needed
    },
});

export default ProgressBar;
