import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions,  TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

function AnswerScreen({ route }) {
  const navigation = useNavigation(); // Initialize navigation
  const { responseMessage, question, childAge } = route.params;

  return (
    <View style={styles.mainContainer}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Your Question</Text>
      </View>
      <TextInput
        style={[styles.inputField, styles.inputContainer, styles.scrollableInput]}
        placeholder="Write Your Question Here..."
        value={question}
        multiline={true}
        editable={false}
        scrollEnabled={true}
      />
      <ScrollView style={styles.responseContainer}>
        {childAge && (
          <Text style={styles.tipsHeader}>Tips: Child's Age {childAge} months</Text>
        )}
        <MarkdownDisplay content={responseMessage} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tipsHeader: {
    paddingTop: 10,
    color: '#5b5b5b',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    height: height,
    paddingTop: 50,
    paddingBottom: 30,
    width: '100%',
    borderRadius: 10,
    paddingVertical: 0,
    elevation: 2,
    paddingHorizontal: 20,
    marginBottom: height * 0.05,
  },
  backButton: {
    top: 10,
    paddingTop: 30,
    paddingBottom: 20,
  },
  backButtonText: {
    fontSize: 30,
  },
  labelContainer: {
    top: 10,
    zIndex: 1,
    left: 5,
    backgroundColor: '#84e8f8',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  label: {
    color: '#3d7b85',
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#d3f9ff',
    shadowColor: '#84e8f8',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  inputField: {
    fontSize: 16,
    color: '#333',
  },
  scrollableInput: {
    height: 80,
  },
});

export default AnswerScreen;
