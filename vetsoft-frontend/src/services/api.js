// Conexión principal con el backend VetSoft
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/VetSoft",
});

export default api;