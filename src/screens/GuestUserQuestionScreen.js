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
import helloImage from '../../assets/images/icHi.png';

const { width, height } = Dimensions.get('window');

function GuestUserQuestionScreen() {
  const [childAge, setChildAge] = useState('');
  const [question, setQuestion] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const trendingQuestions = [
    'What are some healthy snack options for toddlers that are easy to prepare?',
    'How much screen time is appropriate for my child, and what are some educational shows I can let them watch?',
    'What are some fun indoor activities to help my child develop motor skills?',
  ];

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

  const handleTrendingQuestionPress = (selectedQuestion) => {
    setQuestion(selectedQuestion);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={profileImage} style={styles.profileImage} resizeMode="cover" />

        <View style={styles.formContainer}>
          <Text style={styles.helloGreeting}>
            Hello Parents!
            <Image source={helloImage} style={styles.helloImage} />
          </Text>
          <Text style={styles.helloText}>
            I’m here to help! Please share your questions about your child below.
          </Text>
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
            style={[styles.inputField, styles.inputContainer, styles.scrollableInput]} // Dynamically grow height
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
      </ScrollView>
      <View style={styles.trendingQuestionsContainer}>
        <View style={styles.questionHeaderContainer}>
          <Text style={styles.trendingQuestionsHeader}>Trending Questions</Text>
        </View>
        {trendingQuestions.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleTrendingQuestionPress(item)} style={styles.questionContainer}>
            <View style={styles.questionRow}>
              <Text style={styles.trendingQuestion}>{item}</Text>
              <View style={styles.arrowIconContainer}>
                <Text style={styles.arrowColor}> > </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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

export default GuestUserQuestionScreen;
