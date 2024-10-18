import React, {useEffect, useRef, useState} from 'react';
import { KeyboardAvoidingView, ScrollView, Animated, Text} from 'react-native';
import { getSavedQuestions } from '../api/api';
import Loader from '../components/loader';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';
import QuestionsWithAnswers from '../components/questionsWithAnswers';
import DeviceInfo from 'react-native-device-info';
import {handleApiError} from '../util/errorHandler';
import {showMessage} from '../util/showAnimatedMessage';
import {componentAnswersStyles} from '../styles/componentAnswersStyles';

function QuestionsHistoryScreen({ route }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorResponse] = useState('');
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
        if (!data || data === 'undefined') {
          // Handle case where API returns an error
          showMessage('Something went wrong.', setErrorResponse, fadeAnim);
        }

        setResponseMessage(data || ""); // Set response message from API
      } catch (error) {
        const msg = handleApiError(error); // Use the utility to get the error message
        showMessage(msg, setErrorResponse, fadeAnim);
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
      {/* Animated View for the response message */}
      <Animated.View
        style={[
          componentAnswersStyles.popupContainer,
          { opacity: fadeAnim }, // Bind opacity to animated value
        ]}
      >
        <Text style={componentAnswersStyles.popupText}>{errorMessage}</Text>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

export default QuestionsHistoryScreen;
