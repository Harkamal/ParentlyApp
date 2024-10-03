import { StyleSheet, Dimensions } from 'react-native';

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
  backgroundImage: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF', // White color for the text
    marginTop: 200,
    paddingHorizontal: 30,
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: '#76D44A', // Match the green from your design
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#FFFFFF', // White color for the text
    fontWeight: 'bold',
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
    backgroundColor: '#E7B549',
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
