import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { introScreenStyles } from '../styles/styles';
import BackgroundWrapper from '../components/BackgroundWrapper';
import ButtonBackground from '../components/ButtonBackground';

const roboImage = require('../../assets/images/roboWithSearchBar.png');

const IntroScreen = ({ navigation }) => {
  const handleContinuePress = () => {
    // Action on Continue button press
    // For example, navigate to the next screen:
    navigation.navigate('Main');
  };

  return (
    <BackgroundWrapper>
      <View style={introScreenStyles.upperContainer}>
        <Image
          source={roboImage}
          style={introScreenStyles.roboImage}
          resizeMode="contain"
        />
      </View>
      <View style={introScreenStyles.lowerContainer}>
        <Text style={introScreenStyles.description}>
          Parenting made smarter with AI. {"\n"}
          Get instant answers to your child-related questions and unlock expert insights at your fingertips.
        </Text>
      </View>
      <View style={introScreenStyles.bottomContainer}>
          <TouchableOpacity style={introScreenStyles.continueButton} onPress={handleContinuePress}>
            <Text style={introScreenStyles.continueButtonText}>CONTINUE</Text>
          </TouchableOpacity>
      </View>
    </BackgroundWrapper>
  );
};

export default IntroScreen;
