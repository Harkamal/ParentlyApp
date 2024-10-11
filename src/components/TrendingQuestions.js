import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { guestUserQuestionScreenStyles } from '../styles/styles';

const TrendingQuestions = ({ query, setQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const trendingQuestions = [
    'What are some healthy snack options for toddlers that are easy to prepare?',
    'How much screen time is appropriate for my child, and what are some educational shows I can let them watch?',
    'What are some fun indoor activities to help my child develop motor skills?',
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTrendingQuestionPress = (selectedQuestion) => {
    setQuery(selectedQuestion);
  };

  return (
    <View style={guestUserQuestionScreenStyles.trendingQuestionsContainer}>
      <TouchableOpacity onPress={toggleExpanded} style={guestUserQuestionScreenStyles.questionHeaderContainer}>
        <Text style={guestUserQuestionScreenStyles.trendingQuestionsHeader}>
          Trending Questions
          <Text style={guestUserQuestionScreenStyles.expandedCollapsedIndicator}>{isExpanded ? "▲" : "▼"}</Text>
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
  );
};

export default TrendingQuestions;
