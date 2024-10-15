import React from 'react';
import { ImageBackground } from 'react-native';
import {componentBackgroundWrapperStyles} from '../styles/componentBackgroundWrapperStyles';

const BackgroundWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={componentBackgroundWrapperStyles.background}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundWrapper;
