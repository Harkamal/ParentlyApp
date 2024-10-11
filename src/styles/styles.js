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
export const tipsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7B549',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C2A29',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
    color: '#2C2A29',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  modalOverlay: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent background
  },
  modalContent: {
    width: '90%',
    maxHeight: screenHeight * 0.9, // Set a maximum height of 90% of screen height
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 0,
    backgroundColor: '#E7B549',
  },
  responseContainer: {
    maxHeight: 500, // Set a max height for the response container
  },
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#FF6F00', // Orange button color
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export const componentMarkdownStyles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '100%',
  },
});

export const componentLoaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const componentBackgroundWrapperStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export const componentButtonBackgroundStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export const guestUserQuestionScreenStyles = StyleSheet.create({

  helloGreeting: {
    color: '#5b5b5b',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    left: 65,
  },
  helloText: {
    color: '#5b5b5b',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    left: 65,
    width: width * 0.8,
  },
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  profileImage: {
    backgroundColor: 'rgba(184, 245, 244, 1)',
  },
  formContainer: {
    position: 'absolute',
    top: height * 0.07,
    width: '100%',
    borderRadius: 10,
    paddingVertical: 0,
    elevation: 2,
    paddingHorizontal: 20,
    marginBottom: height * 0.05,
  },
  labelContainer: {
    top: 10,
    zIndex: 1,
    left: 5,
    backgroundColor: '#84e8f8', // Blue background color
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  label: {
    color: '#3d7b85', // White text color
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF', // Set a light background color
    borderColor: '#d3f9ff', // Set border color
    shadowColor: '#84e8f8',
    borderWidth: 1, // Border width
    borderRadius: 20, // Rounded corners
    padding: 15, // Inner padding
    marginBottom: 15, // Space below the input field
    shadowOffset: {
      width: 2,
      height: 7, // Move shadow downwards
    },
    shadowOpacity: 1, // Shadow opacity
    elevation: 5, // For Android shadow
  },
  inputField: {
    fontSize: 16,
    color: '#333',
  },
  scrollableInput: {
    height: 80, // Set a maximum height to restrict the growth of the input field
  },
  submitButton: {
    width: width * 0.5,
    alignSelf: 'center',
    backgroundColor: '#8DDE0E',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    elevation: 3,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  trendingQuestionsContainer: {
    backgroundColor: '#eff9ff',
    paddingLeft: 15,
    padding: 5,
  },
  questionHeaderContainer: {
    borderBottomWidth: 1, // Change to 1 or desired thickness
    borderBottomColor: '#5b5b5b', // Border color for division
    paddingVertical: 10, // Padding above and below the text
  },
  trendingQuestionsHeader: {
    color: '#5b5b5b',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  questionContainer: {
    borderBottomWidth: 1, // Change to 1 or desired thickness
    borderBottomColor: '#5b5b5b', // Border color for division
    paddingVertical: 10, // Padding above and below the text
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIconContainer: {
    backgroundColor: '#4dc4f1', // Circle background color
    borderRadius: 20, // Make it a circle
    padding: 5, // Padding inside the circle
    marginRight: 20, // Space between icon and question text
  },
  arrowColor: {
    color: '#84e8f8',
  },
  expandedCollapsedIndicator: {
    color: '#84e8f8',
    fontSize: 40,
  },
  arrowIcon: {
    width: 20,
    height: 20, // Adjust size as necessary
  },
  trendingQuestion: {
    width: width * 0.8,
    color: '#5b5b5b',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    paddingVertical: 5, // Add padding above and below each question
  },
});

