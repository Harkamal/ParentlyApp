// src/screens/TipsScreen.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import MarkdownDisplay from '../components/MarkdownDisplay';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loader from '../components/Loader';
import { tipsScreenStyles } from '../styles/styles'; // Import styles
import { postParentingAssistantQuery } from '../api/api'; // Import the API function
import DeviceInfo from 'react-native-device-info'; // Import DeviceInfo

function TipsScreen() {
  const [childAge, setChildAge] = useState('');
  const [query, setQuery] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isInvalidAge, setIsInvalidAge] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading
  const [deviceId, setDeviceId] = useState(''); // State for device ID


  useEffect(() => {
    // Get the device ID on component mount
    const fetchDeviceId = async () => {
      const id = await DeviceInfo.getUniqueId(); // Get the unique device ID
      setDeviceId(id);
    };

    fetchDeviceId();
  }, []);

  const handleSubmit = async () => {
    const currentDate = new Date();
    const year = parseInt(childAge.substring(0, 4));
    const month = parseInt(childAge.substring(4, 6));

    // Validate age input
    if (
      !/^\d{6}$/.test(childAge) ||
      year > currentDate.getFullYear() ||
      (year === currentDate.getFullYear() && month > currentDate.getMonth() + 1) ||
      currentDate.getFullYear() - year > 20
    ) {
      setIsInvalidAge(true);
      return;
    }

    setIsInvalidAge(false);
    const body = { query, child_age: childAge, device_id: deviceId };

    setLoading(true); // Set loading to true when API call starts

    try {
      const data = await postParentingAssistantQuery(body); // Call the API function
      setResponseMessage(data.message || ""); // Set response message
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage("Sorry! An error occurred while trying to submit your query.");
    } finally {
      setLoading(false); // Set loading to false when API call is done
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={tipsScreenStyles.container}>
      <Text style={tipsScreenStyles.title}>Parenting Assistant!</Text>
      <Text style={tipsScreenStyles.text}>I will try my best to assist you.</Text>

      <Text style={tipsScreenStyles.label}>Child's Age (YYYYMM):</Text>
      <TextInput
        style={tipsScreenStyles.input}
        value={childAge}
        onChangeText={setChildAge}
        keyboardType="numeric"
      />
      {isInvalidAge && (
        <Text style={tipsScreenStyles.errorMessage}>Please provide the age in YYYYMM format (not older than 20 years).</Text>
      )}

      <Text style={tipsScreenStyles.label}>Type your question:</Text>
      <TextInput
        style={tipsScreenStyles.textArea}
        value={query}
        onChangeText={setQuery}
        multiline
        numberOfLines={4}
        placeholder="Can you help me to create a meal plan for my child?"
        placeholderTextColor="#4A4A4A"
      />

      <TouchableOpacity style={tipsScreenStyles.submitButton} onPress={handleSubmit}>
        <Text style={tipsScreenStyles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Loader */}
      {loading && <Loader size={50} />}

      {/* Response Message Area */}
      {responseMessage && (
        <TouchableOpacity onPress={toggleModal} style={tipsScreenStyles.modalOverlay}>
          <Text style={tipsScreenStyles.modalText}>Your advice is here—tap to see!</Text>
        </TouchableOpacity>
      )}

      {/* Modal for displaying the response message */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={tipsScreenStyles.modalBackground}>
          <View style={tipsScreenStyles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={tipsScreenStyles.closeButton}>
              <Icon name="close" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <ScrollView style={tipsScreenStyles.responseContainer}>
              <MarkdownDisplay content={responseMessage} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TipsScreen;
