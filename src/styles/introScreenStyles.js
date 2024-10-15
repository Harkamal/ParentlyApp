import { StyleSheet, Dimensions } from 'react-native';

// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');
export const introScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  roboImage: {
    height: height * 0.5,
    marginTop: height * 0.2, // 10% of screen height as top margin
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: height * 0.05, // Space below middle section
  },
  description: {
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#8DDE0E',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    elevation: 3,
  },
  continueButtonPressed: {
    backgroundColor: '#4CAF50',
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
