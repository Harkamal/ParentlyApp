import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {componentButtonBackgroundStyles} from '../styles/styles';

const ButtonBackground = ({ children }) => {
return (
<ImageBackground
source={require('../../assets/images/btnBg.png')}
style={componentButtonBackgroundStyles.background}
>
{children}
</ImageBackground>
);
};

export default ButtonBackground;
