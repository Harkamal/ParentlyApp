import React from 'react';
import {
  View,
  Text,
  TouchableOpacity, StyleSheet,
} from 'react-native';
import { questionHistoryScreenStyles} from '../styles/questionHistoryScreenStyles';
import { useNavigation } from '@react-navigation/native';
import {FormatChildAge} from './FormatChildAge';

const QuestionsWithAnswers = ({ questionsWithAnswers }) => {
  const navigation = useNavigation();

  const handleQuestionPress = (questionWithAnswer) => {
    navigation.navigate('Answer', {
      responseMessage: questionWithAnswer.answer,
      success: true,
      question: questionWithAnswer.question,
      childAge: questionWithAnswer.childAgeInMonths,
    });
  };

  return (
    <View style={questionHistoryScreenStyles.questionHistoryContainer}>
      <View style={questionHistoryScreenStyles.trendingQuestionsContainer}>
        <TouchableOpacity style={questionHistoryScreenStyles.questionHeaderContainer}>
          <Text style={questionHistoryScreenStyles.trendingQuestionsHeader}>
            Your Questions
          </Text>
        </TouchableOpacity>
        {/* Check if questionsWithAnswers is empty or undefined */}
        {questionsWithAnswers && questionsWithAnswers.length > 0 ? (
          questionsWithAnswers.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleQuestionPress(item)}
              style={questionHistoryScreenStyles.questionContainer}
            >
              <View style={questionHistoryScreenStyles.questionRow}>
                <Text style={questionHistoryScreenStyles.trendingQuestion}>{item.question}(Child Age: {FormatChildAge(item.childAgeInMonths)})</Text>
                <View style={questionHistoryScreenStyles.arrowIconContainer}>
                  <Text style={questionHistoryScreenStyles.arrowColor}> > </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          // Fallback message when no questions exist
          <Text style={questionHistoryScreenStyles.noQuestionsText}>
            It looks like you haven’t asked any questions yet. Start exploring and let us help with your parenting journey!
          </Text>
        )}
      </View>
    </View>
  );
};

export default QuestionsWithAnswers;

