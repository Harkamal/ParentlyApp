import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity, StyleSheet,
} from 'react-native';
import {guestUserQuestionScreenStyles} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

const QuestionsWithAnswers = ({ questionsWithAnswers }) => {
  const handleQuestionPress = (questionWithAnswer) => {
    navigation.navigate('AnswerScreen', { responseMessage: questionWithAnswer.answer, question: questionWithAnswer.question });
  };
  const navigation = useNavigation();

  return (
    <View style={styles.questionHistoryContainer}>
    <View style={guestUserQuestionScreenStyles.trendingQuestionsContainer}>
      <TouchableOpacity style={guestUserQuestionScreenStyles.questionHeaderContainer}>
        <Text style={guestUserQuestionScreenStyles.trendingQuestionsHeader}>
          Your Questions
        </Text>
      </TouchableOpacity>
      {questionsWithAnswers.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleQuestionPress(item)} style={guestUserQuestionScreenStyles.questionContainer}>
            <View style={guestUserQuestionScreenStyles.questionRow}>
              <Text style={guestUserQuestionScreenStyles.trendingQuestion}>{item.question}</Text>
              <View style={guestUserQuestionScreenStyles.arrowIconContainer}>
                <Text style={guestUserQuestionScreenStyles.arrowColor}> > </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
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
    //alignItems: 'center',
    paddingTop: 40,
  },
});
