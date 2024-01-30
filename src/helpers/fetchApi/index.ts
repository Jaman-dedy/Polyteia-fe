
// const API_URL: string = process.env.REACT_APP_API_URL || '';
const API_URL: string = import.meta.env.VITE_APP_API_URL
console.log('API_URL :>> ', API_URL);

export const fetchApi = async (url: string, method: string, data?: any) => {

  try {
    const uri: string = `${API_URL}/${url}`
    const response = await fetch(uri, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      ...(data && { body: JSON.stringify(data) }),
    });
    return response.json()

  } catch (error) {
    throw new Error('Failed to call the api');
  }
};
