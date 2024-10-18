// markdownDisplay.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { componentMarkdownStyles } from '../styles/componentMarkdownStyles';

const MarkdownDisplay = ({ content }) => {
  // Handle undefined content by ensuring it's a string
  const safeContent = typeof content === 'string' ? content : '';

  // Replace <b> tags with markdown style
  const formattedContent = safeContent
    .replace(/<b>(.*?)<\/b>/g, '**$1**') // Handle <b> tags
    .replace(/\\n/g, '\n'); // Handle escaped newlines

  return (
    <ScrollView style={componentMarkdownStyles.container}>
      <Markdown
        style={{
          text: {
            fontSize: 16,
            color: '#000',
          },
          heading1: {
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 10,
          },
          heading2: {
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 10,
          },
          heading3: {
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 10,
          },
          list: {
            marginVertical: 5,
          },
          // Add more styles if needed
        }}
      >
        {formattedContent}
      </Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;
