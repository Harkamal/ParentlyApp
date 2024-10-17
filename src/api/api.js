import { API_ENDPOINTS } from './config';

const handleResponse = async (response) => {
  let data;

  // Check if the response's Content-Type is JSON
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.includes('application/json')) {
    // Try parsing the response as JSON
    data = await response.json();
  } else {
    // Handle cases where the response is not JSON (e.g., plain text, HTML)
    const text = await response.text();
    console.log('Non-JSON response:', text); // For debugging purposes
    throw new Error('Received non-JSON response from the server');
  }

  console.log('Parsed data:', data); // Debugging output

  if (!response.ok) {
    // Use the parsed message if available, otherwise provide a generic error message
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};

export const postParentingAssistantQuery = async (queryData) => {
  const response = await fetch(API_ENDPOINTS.PARENTING_ASSISTANT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(queryData),
  });

  return handleResponse(response);
};

export const getQuestionsHistoryQuery = async (queryData) => {
  const response = await fetch(API_ENDPOINTS.QUESTIONS_HISTORY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(queryData),
  });

  return handleResponse(response);
};

export const postSaveQuestion = async (queryData) => {
  const response = await fetch(API_ENDPOINTS.SAVE_QUESTION, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(queryData),
  });

  return handleResponse(response);
};
