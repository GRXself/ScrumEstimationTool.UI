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
  createRoom(roomId) {
    return apiClient.post("/room", {
      roomId: parseInt(roomId)
    });
  },
  enterRoom(roomId) {
    return apiClient.get("/room/" + roomId);
  },
  resetRoom(roomId) {
    return apiClient.put("/room/" + roomId);
  }
};
