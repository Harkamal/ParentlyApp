import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { introScreenStyles } from '../styles/styles';
import BackgroundWrapper from '../components/BackgroundWrapper';

const roboImage = require('../../assets/images/roboWithSearchBar.png');

const IntroScreen = ({ navigation }) => {
  // State for managing pressed effect
  const [isPressed, setIsPressed] = useState(false);

  const handleContinuePress = () => {
    // Action on Continue button press
    navigation.navigate('Main');
  };

  return (
    <BackgroundWrapper>
      <View style={introScreenStyles.mainContainer}>
        <Image
          source={roboImage}
          style={introScreenStyles.roboImage}
          resizeMode="contain"
        />
        <View style={introScreenStyles.textContainer}>
          <Text style={introScreenStyles.description}>
            Parenting made smarter with AI. {"\n"}
            Get instant answers to your child-related questions and unlock expert insights at your fingertips.
          </Text>

          <TouchableOpacity
            style={[
              introScreenStyles.continueButton,
              isPressed && introScreenStyles.continueButtonPressed, // Apply pressed style
            ]}
            onPress={handleContinuePress}
            onPressIn={() => setIsPressed(true)} // Set pressed state
            onPressOut={() => setIsPressed(false)} // Reset pressed state
            activeOpacity={0.7} // Set opacity for pressed state
          >
            <Text style={introScreenStyles.continueButtonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default IntroScreen;
