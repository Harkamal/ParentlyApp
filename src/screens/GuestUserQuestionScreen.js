import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import BackgroundWrapper from '../components/BackgroundWrapper';

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
    <BackgroundWrapper>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <LinearGradient
            colors={['rgba(181, 235, 254, 1)', 'rgba(187, 255, 234, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.header}>
              <Text style={styles.greetingText}>Ask me anything</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.middleContainer}>
          <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
            <Text style={styles.inputField}>{formatDate(selectedDate)}</Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputField, { height: Math.max(60, question.length / 40 * 30) }]} // Dynamically grow height
              placeholder="Write Your Question Here..."
              value={question}
              onChangeText={setQuestion}
              multiline={true}
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
          date={selectedDate || new Date()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between', // Ensure button stays in place
  },
  topContainer: {
    flex: 3,
    overflow: 'hidden',
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  middleContainer: {
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: '80%',
    alignSelf: 'center',
  },
  inputField: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#8DDE0E',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    shadowColor: 'rgba(113, 190, 1, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20, // Ensure spacing from bottom
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});

export default GuestUserQuestionScreen;
