/**
 * Helper function to make API requests.
 * @param {string} url - The API endpoint URL.
 * @param {object} options - Fetch options such as method, headers, body, etc.
 * @returns {Promise<object>} - The response data from the API.
 */
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error;
  }
};
