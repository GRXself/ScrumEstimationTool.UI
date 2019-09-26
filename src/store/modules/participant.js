import ParticipantService from "@/services/ParticipantService.js";

const namespaced = true;

const state = {
  name: null,
  estimation: null
};

const getters = {};

const mutations = {
  SET_PARTICIPANT_NAME(state, name) {
    state.name = name;
  },
  SET_PARTICIPANT_ESTIMATION(state, estimation) {
    state.estimation = estimation;
  }
};

const actions = {
  getAll(context) {
    const roomId = context.rootState.room.id;
    return ParticipantService.getAll(roomId)
      .then(response => {
        context.commit("room/SET_ROOM_PARTICIPANTS", response.data, {
          root: true
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("Room " + roomId + " NOT exist!");
        }
      });
  },
  submit(context) {
    const roomId = context.rootState.room.id;
    return ParticipantService.submit(roomId, state)
      .then(() => {
        alert("Submit success!");
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("Room " + roomId + " NOT exist!");
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
