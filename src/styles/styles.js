import { StyleSheet, Dimensions } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('window'); // Get screen height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7B549',
  },
  tabInactiveIcon: {
    color: 'gray',
  },
  tabActiveIcon: {
    color: '#FF6F00',
  },
});

