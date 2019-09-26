<template>
  <div>
    <h2>Host</h2>

    <div>
      <div class="page-panel" style="border-right: 5px solid">
        <room-id-display></room-id-display>

        <div>
          <input
            type="button"
            @click="getAll()"
            value="Show estimations"
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" @click="resetRoom()" value="Reset" />
        </div>

        <div>
          Estimation Result:
          <div v-if="!estimations.length">There is the result.</div>
          <div v-else>
            <ul>
              <li v-for="estimation in estimations" :key="estimation">
                {{ estimation }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="page-panel">
        Share the link below to join the room:
        <br />
        <input class="link-show" type="text" id="room-link" />
        <br />
        <button onclick="copySharedLink()">Copy</button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import RoomIdDisplay from "@/components/RoomIdDisplay.vue";
import { mapActions } from "vuex";

export default {
  name: "Host",
  components: {
    RoomIdDisplay
  },
  methods: {
    ...mapActions("participant", ["getAll"]),
    ...mapActions("room", ["resetRoom"])
  },
  computed: {
    estimations() {
      let participants = this.$store.state.room.participants;
      let estimations = [];
      for (const participant of participants) {
        estimations.push(participant.name + ": " + participant.estimation);
      }
      return estimations;
    }
  }
};
</script>

<style scoped>
.link-show {
  width: 90%;
}
</style>
