import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import { useNavigation } from '@react-navigation/native';
import { FormatChildAge } from './FormatChildAge';
import { componentAnswersStyles } from '../styles/componentAnswersStyles';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';
import { postSaveQuestion } from '../api/api';

const { width, height } = Dimensions.get('window');

function Answer({ route }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [questionId, setQuestionId] = useState('');
  const navigation = useNavigation();
  const { response, successResponse, showSaveButton, childAge } = route.params;

  // Fade animation state
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Function to show the response message and fade it away
  const showMessage = (message) => {
    setResponseMessage(message);
    // Start fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // fade-in duration
      useNativeDriver: true,
    }).start(() => {
      // After 3 seconds, fade out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500, // fade-out duration
          useNativeDriver: true,
        }).start();
      }, 3000); // duration to show the message before fade-out
    });
  };

  const handleSave = async () => {
    const body = { question_id: response.question_id };
    try {
      const data = await postSaveQuestion(body);
      if (data.success) {
        showMessage('Your question is saved successfully.');
      } else {
        showMessage('Sorry! Your question could not be saved. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('Sorry! Your question could not be saved. Please try again.');
    }
  };

  return (
    <View style={componentAnswersStyles.answerContainer}>
      {/* Back button */}
      <TouchableOpacity
        style={componentAnswersStyles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={componentAnswersStyles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <View style={componentAnswersStyles.labelContainer}>
        <Text style={componentAnswersStyles.label}>Your Question</Text>
      </View>

      <TextInput
        style={[
          componentAnswersStyles.inputField,
          componentAnswersStyles.inputContainer,
          componentAnswersStyles.scrollableInput,
        ]}
        placeholder="Write Your Question Here..."
        value={response.question}
        multiline={true}
        editable={false}
        scrollEnabled={true}
      />

      <ScrollView style={componentAnswersStyles.responseContainer}>
        {childAge !== undefined && successResponse && (
          <Text style={componentAnswersStyles.tipsHeader}>
            Tips: Child's Age {FormatChildAge(childAge)}
          </Text>
        )}
        <MarkdownDisplay content={response.answer} />
      </ScrollView>

      {showSaveButton && !response.saved && (
        <TouchableOpacity
          style={componentAnswersStyles.saveButton}
          onPress={handleSave}>
          <Text style={componentAnswersStyles.saveButtonText}>
            SAVE
          </Text>
        </TouchableOpacity>
      )}

      {/* Animated View for the response message */}
      <Animated.View
        style={[
          componentAnswersStyles.popupContainer,
          { opacity: fadeAnim }, // Bind opacity to animated value
        ]}
      >
        <Text style={componentAnswersStyles.popupText}>{responseMessage}</Text>
      </Animated.View>
    </View>
  );
}

export default Answer;

