// errorHandler.js
export const handleApiError = (error) => {
  if (error.message === 'Network Error') {
    return 'Please check your internet connection and try again.';
  } else if (error.response) {
    // Handle errors from server (like 4xx, 5xx responses)
    return `Server error: ${error.response.statusText || 'Unknown error occurred'}`;
  } else {
    // Handle errors from server (like 4xx, 5xx responses)
    return error.message || 'Sorry! An error occurred while processing your request.';
  }
};
