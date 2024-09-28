import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const dailyTips = [
    "Stay patient, parenting is a journey!",
    "Remember to take breaks for yourself.",
    "Ask for help when needed!",
    "Celebrate every little achievement.",
  ];

  const milestones = [
    { id: 1, name: "First Steps", date: "2024-01-10" },
    { id: 2, name: "First Words", date: "2024-02-15" },
  ];

  const todayTip = dailyTips[new Date().getDay() % dailyTips.length];

  const handleButtonPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.welcomeText,
          { opacity: fadeAnim, transform: [{ translateY }] },
        ]}
      >
        Welcome to Parently!
      </Animated.Text>

      <Animated.Text
        style={[
          styles.description,
          { opacity: fadeAnim, transform: [{ translateY }] },
        ]}
      >
        Your best companion in the journey of parenthood.
      </Animated.Text>

      {/* Buttons for navigation */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPressIn={handleButtonPressIn}
          onPressOut={handleButtonPressOut}
          onPress={() => navigation.navigate('Tips')}
          style={styles.button}
        >
          <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
           Ask me anything!
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E7B549',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#FF6F00', // Orange button color
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
