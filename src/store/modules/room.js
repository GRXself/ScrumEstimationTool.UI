import RoomService from "@/services/RoomService.js";
import router from "@/router";

const namespaced = true;

const state = {
  id: 0
};

const getters = {
  roomId: state => {
    return state.id || 0;
  }
};

const mutations = {
  SET_ROOM_ID(state, id) {
    state.id = id;
  }
};

const actions = {
  createRoom() {
    return RoomService.createRoom(state.id)
      .then(() => {
        router.push({ path: "/host" });
      })
      .catch(error => {
        if (error.response.status === 400) {
          alert("Room " + state.id + " exist! Please pick another one!");
        }
      });
  },
  enterRoom() {
    return RoomService.enterRoom(state.id)
      .then(() => {
        router.push({ path: "/participant" });
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("Room " + state.id + " is NOT exist!");
        }
      });
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
