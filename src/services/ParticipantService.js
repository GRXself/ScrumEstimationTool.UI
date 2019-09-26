import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://localhost:5001/api`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getAll(roomId) {
    return apiClient.get("/participant/" + roomId);
  },
  submit(roomId, participant) {
    return apiClient.post("/participant/" + roomId, participant);
  }
};
