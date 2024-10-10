import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import { useNavigation } from '@react-navigation/native';
import {postParentingAssistantQuery} from '../api/api';
import Loader from '../components/Loader';  // Import useNavigation

const { width, height } = Dimensions.get('window');

function AnswerScreen({ route }) {
  const [loading, setLoading] = useState(false); // State for loading
  const navigation = useNavigation(); // Initialize navigation
  const { responseMessage, question, childAge } = route.params;
  const handleSubmit = async () => {


    const body = { responseMessage, query: question, child_age: childAge };

    setLoading(true); // Set loading to true when API call starts

    try {
      const data = await postParentingAssistantQuery(body); // Call the API function
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false when API call is done
    }
  };

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
        <Text style={styles.tipsHeader}>Tips: Child's Age {childAge} months</Text>
        <MarkdownDisplay content={responseMessage} />
      </ScrollView>
      <TouchableOpacity style={styles.submitButton}  onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SAVE</Text>
      </TouchableOpacity>
      {loading && <Loader size={50} />}
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
  submitButton: {
    width: width * 0.5,
    alignSelf: 'center',
    backgroundColor: '#8DDE0E',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    elevation: 3,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});

export default AnswerScreen;
