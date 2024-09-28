import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height: screenHeight } = Dimensions.get('window'); // Get screen height

function TipsScreen() {
  const [childAge, setChildAge] = useState('');
  const [query, setQuery] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isInvalidAge, setIsInvalidAge] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = async () => {
    const currentDate = new Date();
    const year = parseInt(childAge.substring(0, 4));
    const month = parseInt(childAge.substring(4, 6));

    if (!/^\d{6}$/.test(childAge) ||
      year > currentDate.getFullYear() ||
      (year === currentDate.getFullYear() && month > (currentDate.getMonth() + 1)) ||
      (currentDate.getFullYear() - year > 20)) {
      setIsInvalidAge(true);
      return;
    }

    setIsInvalidAge(false);

    const body = { query, child_age: childAge };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/parents/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || ""); // Default to empty string if undefined
      } else {
        setResponseMessage("Sorry! Unable to help you now. Please submit your query again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage("Sorry! An error occurred while trying to submit your query.");
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parenting Assistant!</Text>
      <Text style={styles.text}>I will try my best to assist you.</Text>

      <Text style={styles.label}>Child's Age (YYYYMM):</Text>
      <TextInput
        style={styles.input}
        value={childAge}
        onChangeText={setChildAge}
        keyboardType="numeric"
      />
      {isInvalidAge && (
        <Text style={styles.errorMessage}>Please provide the age in YYYYMM format (not older than 20 years).</Text>
      )}

      <Text style={styles.label}>Type your question:</Text>
      <TextInput
        style={styles.textArea}
        value={query}
        onChangeText={setQuery}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Response Message Area */}
      {responseMessage && (
        <TouchableOpacity onPress={toggleModal} style={styles.modalOverlay}>
          <Text style={styles.modalText}>Click here to read the response</Text>
        </TouchableOpacity>
      )}

      {/* Modal for displaying the response message */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="close" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <ScrollView style={styles.responseContainer}>
              <MarkdownDisplay content={responseMessage} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7B549',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C2A29',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
    color: '#2C2A29',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  modalOverlay: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent background
  },
  modalContent: {
    width: '90%',
    maxHeight: screenHeight * 0.9, // Set a maximum height of 90% of screen height
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 0,
    backgroundColor: '#E7B549',
  },
  responseContainer: {
    maxHeight: 500, // Set a max height for the response container
  },
});

export default TipsScreen;
