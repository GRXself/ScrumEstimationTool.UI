import Vue from "vue";
import Vuex from "vuex";
import room from "@/store/modules/room.js";
import participant from "@/store/modules/participant.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    room,
    participant
  },
  state: {},
  mutations: {},
  actions: {}
});
