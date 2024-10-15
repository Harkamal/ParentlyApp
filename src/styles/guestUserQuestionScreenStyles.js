import {StyleSheet, Dimensions} from 'react-native';
// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');
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
