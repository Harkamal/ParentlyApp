import {StyleSheet, Dimensions} from 'react-native';
// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');
export const componentAnswersStyles = StyleSheet.create({
  tipsHeader: {
    paddingTop: 10,
    color: '#5b5b5b',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  answerContainer: {
    backgroundColor: '#ffffff',
    height: height,
    paddingTop: 50,
    paddingBottom: 30,
    width: '100%',
    borderRadius: 10,
    paddingVertical: 0,
    elevation: 2,
    paddingHorizontal: 20,
    marginBottom: height * 0.05,
  },
  backButton: {
    top: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },
  backButtonText: {
    fontSize: 30,
  },
  labelContainer: {
    top: 10,
    zIndex: 1,
    left: 5,
    backgroundColor: '#84e8f8',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  label: {
    color: '#3d7b85',
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#d3f9ff',
    shadowColor: '#84e8f8',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  inputField: {
    fontSize: 16,
    color: '#333',
  },
  scrollableInput: {
    height: 80,
  },
});
