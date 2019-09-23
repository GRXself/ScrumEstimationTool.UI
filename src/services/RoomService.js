import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://localhost:5001`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  createRoom(roomId) {
    return apiClient.post("/api/room", {
      roomId: parseInt(roomId)
    });
  },
  enterRoom(roomId) {
    return apiClient.get("/api/room/" + roomId);
  }
};
