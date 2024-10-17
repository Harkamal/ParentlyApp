import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions,  TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import { useNavigation } from '@react-navigation/native';
import { FormatChildAge } from './FormatChildAge';
import {componentAnswersStyles} from '../styles/componentAnswersStyles';
import {guestUserQuestionScreenStyles} from '../styles/guestUserQuestionScreenStyles';
import {postSaveQuestion} from '../api/api';

const { width, height } = Dimensions.get('window');

function Answer({ route }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [questionId, setQuestionId] = useState('');
  const navigation = useNavigation(); // Initialize navigation
  const { response, successResponse, showSaveButton, childAge } = route.params;
  const handleSave = async () => {
    const body = { question_id: response.question_id };

    // setLoading(true); // Set loading to true when API call starts

    try {
      const data = await postSaveQuestion(body); // Call the API function
      if (data.success){
        setResponseMessage('Your questions is saved successfully.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Sorry! Your question could not be saved. Please try again.');
    } finally {
      //setLoading(false); // Set loading to false when API call is done
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
          style={guestUserQuestionScreenStyles.saveButton}
          onPress={handleSave}>
          <Text style={guestUserQuestionScreenStyles.submitButtonText}>
            SAVE
          </Text>
        </TouchableOpacity>
      )}
      <Text>{responseMessage}</Text>
    </View>
  );
}

export default Answer;
