import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { getQuestionsHistoryQuery } from '../api/api';
import Loader from '../components/Loader';
import { guestUserQuestionScreenStyles } from '../styles/styles';
import QuestionsWithAnswers from '../components/QuestionsWithAnswers';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation

const { width, height } = Dimensions.get('window');

function QuestionsHistoryScreen({ route }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [deviceId, setDeviceId] = useState(''); // State for device ID
  const navigation = useNavigation();

  useEffect(() => {
    // Get the device ID on component mount
    const fetchDeviceId = async () => {
      const id = await DeviceInfo.getUniqueId(); // Get the unique device ID
      setDeviceId(id);
    };

    fetchDeviceId();
  }, []);

  useEffect(() => {
    if (!deviceId) return; // Ensure deviceId is available before making the API call

    const fetchQuestionsHistory = async () => {
      const body = { device_id: deviceId };

      setLoading(true); // Set loading to true when API call starts
      try {
        const data = await getQuestionsHistoryQuery(body); // Call the API function (await for async response)
        console.log(data);
        setResponseMessage(data || ""); // Set response message from API
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading to false when API call is done
      }
    };

    fetchQuestionsHistory();
  }, [deviceId]); // Re-run the effect only when deviceId is set

  return (
    <KeyboardAvoidingView style={guestUserQuestionScreenStyles.mainContainer}>
      {loading ? (
        <Loader size={50} /> // Show the loader while loading
      ) : (
        <QuestionsWithAnswers questionsWithAnswers={responseMessage} /> // Show the component when the response is ready
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tipsHeader: {
    paddingTop: 10,
    color: '#5b5b5b',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  mainContainer: {
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

export default QuestionsHistoryScreen;
