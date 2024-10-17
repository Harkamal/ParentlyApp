import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions,  TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import { useNavigation } from '@react-navigation/native';
import { FormatChildAge } from './FormatChildAge';
import {componentAnswersStyles} from '../styles/componentAnswersStyles';
import {guestUserQuestionScreenStyles} from '../styles/guestUserQuestionScreenStyles';

const { width, height } = Dimensions.get('window');

function Answer({ route }) {
  const navigation = useNavigation(); // Initialize navigation
  const { responseMessage, successResponse, showSaveButton, question, childAge } = route.params;

  return (
    <View style={componentAnswersStyles.answerContainer}>
      {/* Back button */}
      <TouchableOpacity style={componentAnswersStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={componentAnswersStyles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={componentAnswersStyles.labelContainer}>
        <Text style={componentAnswersStyles.label}>Your Question</Text>
      </View>
      <TextInput
        style={[componentAnswersStyles.inputField, componentAnswersStyles.inputContainer, componentAnswersStyles.scrollableInput]}
        placeholder="Write Your Question Here..."
        value={question}
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
        <MarkdownDisplay content={responseMessage} />
      </ScrollView>
      {showSaveButton && (
        <TouchableOpacity style={guestUserQuestionScreenStyles.saveButton}  >
          <Text style={guestUserQuestionScreenStyles.submitButtonText}>SAVE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Answer;
