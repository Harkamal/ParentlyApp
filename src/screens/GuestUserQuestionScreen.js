import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ShadowPropSlider,
  Image,
  Dimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import profileImage from '../../assets/images/Profile.png';
import helloImage from '../../assets/images/icHi.png';
import DeviceInfo from 'react-native-device-info';
import {postParentingAssistantQuery} from '../api/api';
import Loader from '../components/Loader'; // Import DeviceInfo
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import DropDownPicker from 'react-native-dropdown-picker';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';
import TrendingQuestions from '../components/TrendingQuestions';

function GuestUserQuestionScreen() {
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const [deviceId, setDeviceId] = useState(''); // State for device ID
  const [childAge, setChildAge] = useState(0);
  const [query, setQuery] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('english');
  const [items, setItems] = useState([
    { label: 'English', value: 'english' },
    { label: 'Hindi', value: 'hindi' },
    { label: 'Swedish', value: 'swedish' },
  ]);

  useEffect(() => {
    // Get the device ID on component mount
    const fetchDeviceId = async () => {
      const id = await DeviceInfo.getUniqueId(); // Get the unique device ID
      setDeviceId(id);
    };

    fetchDeviceId();
  }, []);

  const handleSubmit = async () => {
    const body = { query: query, child_age_in_months: childAge, device_id: deviceId, preferred_language: language };

    setLoading(true); // Set loading to true when API call starts

    try {
      const data = await postParentingAssistantQuery(body); // Call the API function
      setResponseMessage(data.message || ''); // Set response message
      console.log(data);
      navigation.navigate('Answer', { response: data.message, success: data.success,  showSaveButton: data.success,  childAge: childAge });
    } catch (error) {
      console.error('Error:', error);
        setResponseMessage('Sorry! An error occurred while trying to submit your query.');
    } finally {
      setLoading(false); // Set loading to false when API call is done
    }
  };

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
    const age = (today.getFullYear() - birthDate.getFullYear()) * 12;
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age + monthDiff;
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date ? new Intl.DateTimeFormat('en-US', options).format(date) : "Select Child's Age";
  };

  return (
    <KeyboardAvoidingView style={guestUserQuestionScreenStyles.mainContainer}>
      <ScrollView contentContainerStyle={guestUserQuestionScreenStyles.scrollContainer}>
        <Image source={profileImage} style={guestUserQuestionScreenStyles.profileImage} resizeMode="cover" />

        <View style={guestUserQuestionScreenStyles.formContainer}>
          <Text style={guestUserQuestionScreenStyles.helloGreeting}>
            Hello Parents!
            <Image source={helloImage} style={guestUserQuestionScreenStyles.helloImage} />
          </Text>
          <Text style={guestUserQuestionScreenStyles.helloText}>
            I’m here to help! Please share your questions about your child below.
          </Text>
          <View style={guestUserQuestionScreenStyles.labelContainer}>
            <Text style={guestUserQuestionScreenStyles.label}>Your Preferred Language for the answer</Text>
          </View>
          <View style={[guestUserQuestionScreenStyles.inputContainer, open && { zIndex: 1000 }]}>
            <DropDownPicker
              open={open}
              value={language}
              items={items}
              setOpen={setOpen}
              setValue={setLanguage}
              setItems={setItems}
              placeholder="Choose a language"
              style={guestUserQuestionScreenStyles.dropdown}
              labelStyle={guestUserQuestionScreenStyles.labelStyle}
            />
          </View>
          <View style={guestUserQuestionScreenStyles.labelContainer}>
            <Text style={guestUserQuestionScreenStyles.label}>Child's Age</Text>
          </View>
          <TouchableOpacity onPress={showDatePicker} style={guestUserQuestionScreenStyles.inputContainer}>
            <Text style={guestUserQuestionScreenStyles.inputField}>{formatDate(selectedDate)}</Text>
          </TouchableOpacity>

          <View style={guestUserQuestionScreenStyles.labelContainer}>
            <Text style={guestUserQuestionScreenStyles.label}>Your Question</Text>
          </View>
          <View style={guestUserQuestionScreenStyles.inputContainer}>
          <TextInput
            style={[guestUserQuestionScreenStyles.inputField, guestUserQuestionScreenStyles.scrollableInput]} // Dynamically grow height
            placeholder="Write Your Question Here Or Select From Trending Questions Below..."
            value={query}
            onChangeText={setQuery}
            multiline={true}
            scrollEnabled={true}
          />
          </View>
          <TouchableOpacity style={guestUserQuestionScreenStyles.submitButton}  onPress={handleSubmit}>
            <Text style={guestUserQuestionScreenStyles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
          {/* Loader */}
          {loading && <Loader size={50} />}
        </View>
      </ScrollView>

      {/* Trending Questions Section */}
      <TrendingQuestions query={query} setQuery={setQuery}/>

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

export default GuestUserQuestionScreen;
