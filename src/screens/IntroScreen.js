import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { introScreenStyles } from '../styles/styles';

// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');

// Path to your background image (add this image to your project's assets folder)
const backgroundImage = require('../../assets/images/AboutApp.png');

const IntroScreen = ({ navigation }) => {
  const handleContinuePress = () => {
    // Action on Continue button press
    // For example, navigate to the next screen:
    navigation.navigate('Main');
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={introScreenStyles.backgroundImage}
      resizeMode="cover"
    >
      <View style={introScreenStyles.overlay}>
        {/* The text content */}
       {/* <Text style={styles.description}>
          In the digital age, AI is reshaping how we live, work, and parent.
          “Parenting by AI” examines how technology supports parents with smart
          tools like baby monitors, educational apps, and health insights,
          offering a glimpse into the future of raising children in a
          tech-driven world.
        </Text>*/}

        {/* The Continue button */}
        <TouchableOpacity style={introScreenStyles.continueButton} onPress={handleContinuePress}>
          <Text style={introScreenStyles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default IntroScreen;
