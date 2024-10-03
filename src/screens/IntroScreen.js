import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

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
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* The text content */}
       {/* <Text style={styles.description}>
          In the digital age, AI is reshaping how we live, work, and parent.
          “Parenting by AI” examines how technology supports parents with smart
          tools like baby monitors, educational apps, and health insights,
          offering a glimpse into the future of raising children in a
          tech-driven world.
        </Text>*/}

        {/* The Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF', // White color for the text
    marginTop: 200,
    paddingHorizontal: 30,
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: '#76D44A', // Match the green from your design
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#FFFFFF', // White color for the text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IntroScreen;
