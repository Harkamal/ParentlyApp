import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import MarkdownDisplay from './markdownDisplay';
import { useNavigation } from '@react-navigation/native';
import { FormatChildAge } from './formatChildAge';
import { componentAnswersStyles } from '../styles/componentAnswersStyles';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';
import { postSaveQuestion } from '../api/api';
import {handleApiError} from '../util/errorHandler';
import {showMessage} from '../util/showAnimatedMessage';

const { width, height } = Dimensions.get('window');

function Answer({ route }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorResponse] = useState('');
  const [questionId, setQuestionId] = useState('');
  const navigation = useNavigation();
  const { response, successResponse, showSaveButton, childAge } = route.params;

  // Fade animation state
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSave = async () => {
    const body = { question_id: response.question_id };
    try {
      const data = await postSaveQuestion(body);
      if (data.success) {
        showMessage('Your question is saved successfully.', setErrorResponse, fadeAnim);
      } else {
        showMessage('Sorry! Your question could not be saved. Please try again.', setErrorResponse, fadeAnim);
      }
    } catch (error) {
      const msg = handleApiError(error);
      showMessage(msg, setErrorResponse. fadeAnim);
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
        <Text style={componentAnswersStyles.popupText}>{errorMessage}</Text>
      </Animated.View>
    </View>
  );
}

export default Answer;

