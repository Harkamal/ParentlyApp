// src/components/Loader.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/loader.json')} // Path to your Lottie JSON file
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7B549',
  },
  loader: {
    width: 200,
    height: 200,
  },
});

export default Loader;
