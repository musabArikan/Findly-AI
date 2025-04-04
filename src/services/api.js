import axios from "axios";


const API_URL = import.meta.env.MODE === 'development' 
  ? "http://localhost:5000"
  : "https://mm-ai-backend.onrender.com"; 

export const generateAd = async (description) => {
  try {
    const response = await axios.post(`${API_URL}/api/generate-ad`, {
      description,
    });
    return response.data;
  } catch (error) {
    console.error("AI API Hatası:", error);
    return null;
  }
};
