import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native'; // Ensure this package is installed

const Loader = ({ size = 100 }) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../assets/loader.json')} // Update with your loader JSON file path
        autoPlay
        loop
        style={{ width: size, height: size }} // Adjust size here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
