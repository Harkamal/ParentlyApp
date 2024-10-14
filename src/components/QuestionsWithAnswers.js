import React from 'react';
import {
  View,
  Text,
  TouchableOpacity, StyleSheet,
} from 'react-native';
import { guestUserQuestionScreenStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import {FormatChildAge} from './FormatChildAge';

const QuestionsWithAnswers = ({ questionsWithAnswers }) => {
  const navigation = useNavigation();

  const handleQuestionPress = (questionWithAnswer) => {
    navigation.navigate('Answer', {
      responseMessage: questionWithAnswer.answer,
      question: questionWithAnswer.question,
      childAge: questionWithAnswer.childAgeInMonths,
    });
  };

  return (
    <View style={styles.questionHistoryContainer}>
      <View style={guestUserQuestionScreenStyles.trendingQuestionsContainer}>
        <TouchableOpacity style={guestUserQuestionScreenStyles.questionHeaderContainer}>
          <Text style={guestUserQuestionScreenStyles.trendingQuestionsHeader}>
            Your Questions
          </Text>
        </TouchableOpacity>
        {/* Check if questionsWithAnswers is empty or undefined */}
        {questionsWithAnswers && questionsWithAnswers.length > 0 ? (
          questionsWithAnswers.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleQuestionPress(item)}
              style={guestUserQuestionScreenStyles.questionContainer}
            >
              <View style={guestUserQuestionScreenStyles.questionRow}>
                <Text style={guestUserQuestionScreenStyles.trendingQuestion}>{item.question}(Child Age: {FormatChildAge(item.childAgeInMonths)})</Text>
                <View style={guestUserQuestionScreenStyles.arrowIconContainer}>
                  <Text style={guestUserQuestionScreenStyles.arrowColor}> > </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          // Fallback message when no questions exist
          <Text style={styles.noQuestionsText}>
            It looks like you haven’t asked any questions yet. Start exploring and let us help with your parenting journey!
          </Text>
        )}
      </View>
    </View>
  );
};

export default QuestionsWithAnswers;

const styles = StyleSheet.create({
  questionHistoryContainer: {
    backgroundColor: '#eff9ff',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  noQuestionsText: {
    padding: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
