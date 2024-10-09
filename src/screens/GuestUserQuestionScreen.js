import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import profileImage from '../../assets/images/Profile.png';

const { width, height } = Dimensions.get('window');

function GuestUserQuestionScreen() {
  const [childAge, setChildAge] = useState('');
  const [question, setQuestion] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    const age = calculateAge(date);
    setChildAge(age);
    hideDatePicker();
  };

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date ? new Intl.DateTimeFormat('en-US', options).format(date) : "Select Child's Age";
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={profileImage} style={styles.profileImage} resizeMode="cover" />

        <View style={styles.formContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Child's Age</Text>
          </View>
          <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
            <Text style={styles.inputField}>{formatDate(selectedDate)}</Text>
          </TouchableOpacity>

          <View style={styles.labelContainer}>
            <Text style={styles.label}>Your Question</Text>
          </View>
          <TextInput
            style={[styles.inputField,styles.inputContainer, styles.scrollableInput]} // Dynamically grow height
            placeholder="Write Your Question Here..."
            value={question}
            onChangeText={setQuestion}
            multiline={true}
            scrollEnabled={true}
          />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trendingQuestionsContainer}></View>
      </ScrollView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
        date={selectedDate || new Date()}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
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
    paddingVertical: 5,
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
    overflow: 'hidden', // Ensure that content does not push other elements down
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
  },
});

export default GuestUserQuestionScreen;
