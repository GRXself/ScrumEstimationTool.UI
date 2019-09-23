<template>
  <div class="home">
    <div class="text-center">
      <h1 class="display-4">Welcome</h1>
      <p>
        This is a web tool helps your team do the Scrum estimation. Please
        create a room or join one by shared id. Have fun!
      </p>
    </div>

    <div>
      <div class="page-panel" style="border-right: 5px solid">
        <h3>Host:</h3>
        Create a room? <br />Room Id:
        <input v-model="roomId" />
        <br />
        <input type="button" value="Get this room!" @click="createRoom()" />
      </div>

      <div class="page-panel">
        <h3>Participant:</h3>
        Join a room? <br />Room Id:
        <input v-model="roomId" />
        <br />
        <input type="button" value="Join!" @click="enterRoom()" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "home",
  methods: {
    ...mapActions("room", ["createRoom", "enterRoom", "testApi"])
  },
  computed: {
    roomId: {
      get() {
        return this.$store.state.room.id;
      },
      set(value) {
        this.$store.commit("room/SET_ROOM_ID", value);
      }
    }
  }
};
</script>

<style scoped></style>
