import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { guestUserQuestionScreenStyles } from '../styles/guestUserQuestionScreenStyles';

const TrendingQuestions = ({ query, setQuery }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const trendingQuestions = [
    'What are some healthy snack options for toddlers that are easy to prepare?',
    'How much screen time is appropriate for my child, and what are some educational shows I can let them watch?',
    'What are some fun indoor activities to help my child develop motor skills?',
  ];

  const toggleExpanded = () => {
    // put !isExpanded if collapse expand need to be enabled.
    setIsExpanded(isExpanded);
  };

  const handleTrendingQuestionPress = (selectedQuestion) => {
    setQuery(selectedQuestion);
  };

  return (
    <KeyboardAvoidingView style={guestUserQuestionScreenStyles.trendingQuestionsContainer}>
      <ScrollView contentContainerStyle={guestUserQuestionScreenStyles.scrollContainer}>
      <View style={guestUserQuestionScreenStyles.trendingQuestionsContainer}>
      <TouchableOpacity onPress={toggleExpanded} style={guestUserQuestionScreenStyles.questionHeaderContainer}>
        <Text style={guestUserQuestionScreenStyles.trendingQuestionsHeader}>
          Trending Questions
        </Text>
      </TouchableOpacity>

      <View style={guestUserQuestionScreenStyles.separator} />

      {isExpanded
        ? trendingQuestions.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleTrendingQuestionPress(item)} style={guestUserQuestionScreenStyles.questionContainer}>
            <View style={guestUserQuestionScreenStyles.questionRow}>
              <Text style={guestUserQuestionScreenStyles.trendingQuestion}>{item}</Text>
              <View style={guestUserQuestionScreenStyles.arrowIconContainer}>
                <Text style={guestUserQuestionScreenStyles.arrowColor}> > </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
        : // Show only the first question when collapsed
        <TouchableOpacity onPress={() => handleTrendingQuestionPress(trendingQuestions[0])} style={guestUserQuestionScreenStyles.questionContainer}>
          <View style={guestUserQuestionScreenStyles.questionRow}>
            <Text style={guestUserQuestionScreenStyles.trendingQuestion}>{trendingQuestions[0]}</Text>
            <View style={guestUserQuestionScreenStyles.arrowIconContainer}>
              <Text style={guestUserQuestionScreenStyles.arrowColor}> > </Text>
            </View>
          </View>
        </TouchableOpacity>
      }
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TrendingQuestions;
