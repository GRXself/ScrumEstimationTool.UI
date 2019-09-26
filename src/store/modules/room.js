import RoomService from "@/services/RoomService.js";
import router from "@/router";

const namespaced = true;

const state = {
  id: null,
  participants: [],
  createTime: null,
  lastUseTime: null
};

const getters = {
  roomId: state => {
    return state.id || 0;
  }
};

const mutations = {
  SET_ROOM(state, room) {
    Object.assign(state, room);
  },
  SET_ROOM_ID(state, id) {
    state.id = id;
  },
  SET_ROOM_PARTICIPANTS(state, participants) {
    state.participants = participants;
  }
};

const actions = {
  createRoom({ commit }) {
    return RoomService.createRoom(state.id)
      .then(response => {
        commit("SET_ROOM", response.data);
        router.push({ path: "/host" });
      })
      .catch(error => {
        if (error.response.status === 400) {
          alert("Room " + state.id + " exist! Please pick another one!");
        }
      });
  },
  enterRoom({ commit }) {
    return RoomService.enterRoom(state.id)
      .then(response => {
        commit("SET_ROOM", response.data);
        router.push({ path: "/participant" });
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("Room " + state.id + " is NOT exist!");
        }
      });
  },
  resetRoom({ commit }) {
    return RoomService.resetRoom(state.id).then(response => {
      commit("SET_ROOM", response.data);
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
