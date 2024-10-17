import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { getSavedQuestions } from '../api/api';
import Loader from '../components/Loader';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';
import QuestionsWithAnswers from '../components/QuestionsWithAnswers';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

function QuestionsHistoryScreen({ route }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [deviceId, setDeviceId] = useState(''); // State for device ID

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
        const data = await getSavedQuestions(body); // Call the API function (await for async response)
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
      <ScrollView contentContainerStyle={guestUserQuestionScreenStyles.scrollContainer}>
      {loading ? (
          <Loader size={50} /> // Show the loader while loading
        ) : (
          <QuestionsWithAnswers questionsWithAnswers={responseMessage} /> // Show the component when the response is ready
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default QuestionsHistoryScreen;
