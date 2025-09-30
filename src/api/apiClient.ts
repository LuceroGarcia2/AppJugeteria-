
// src/services/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.105:5181/api", 
  timeout: 10000, 
});

export default apiClient;
