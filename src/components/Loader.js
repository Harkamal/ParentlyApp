import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import {componentLoaderStyles} from '../styles/styles'; // Ensure this package is installed

const Loader = ({ size = 100 }) => {
  return (
    <View style={componentLoaderStyles.container}>
      <Lottie
        source={require('../../assets/images/loader.json')} // Update with your loader JSON file path
        autoPlay
        loop
        style={{ width: size, height: size }} // Adjust size here
      />
    </View>
  );
};

export default Loader;
