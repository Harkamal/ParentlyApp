
// Function to show the response message and fade it away
import {Animated} from 'react-native';

export const showMessage = (message, setResponseMessage, fadeAnim) => {
  setResponseMessage(message);
  // Start fade in
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500, // fade-in duration
    useNativeDriver: true,
  }).start(() => {
    // After 3 seconds, fade out
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // fade-out duration
        useNativeDriver: true,
      }).start();
    }, 3000); // duration to show the message before fade-out
  });
};
