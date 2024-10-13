import { API_ENDPOINTS } from './config';

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
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
