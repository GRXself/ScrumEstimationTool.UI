<template>
  <div>
    <h2>Participant</h2>

    <div>
      <room-id-display class="page-panel"></room-id-display>

      <div class="page-panel" style="border-left: 5px solid">
        <form @submit.prevent>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          </p>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          Your Name:
          <input v-model="name" />
          <br />Your Current Estimation:
          <span>{{ estimation }}</span>
          <br />
          <button @click="onSubmit()">Submit</button>
        </form>
      </div>
    </div>

    <div>
      <div>Click the card below giving a quick estimation:</div>
      <div width="100%">
        <div
          class="poker-card__container"
          v-for="cardValue in cardValues"
          :key="cardValue"
        >
          <div
            class="poker-card__body"
            :class="{ 'poker-card--selected': isSeleted(cardValue) }"
            @click="estimation = cardValue"
          >
            {{ cardValue }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoomIdDisplay from "@/components/RoomIdDisplay.vue";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  name: "Participant",
  components: {
    RoomIdDisplay
  },
  data() {
    return {
      cardValues: [1, 2, 3, 5, 8, 666, 0],
      errors: []
    };
  },
  methods: {
    ...mapActions("participant", ["submit"]),
    onSubmit() {
      if (!this.roomId) {
        alert("No room entered!");
        router.push({ path: "/" });
        return;
      }
      this.errors = [];
      if (this.name && this.estimation) {
        this.submit();
      } else {
        if (!this.name) this.errors.push("Name required!");
        if (!this.estimation) this.errors.push("Estimation required!");
      }
    },
    isSeleted(currentCardValue) {
      return this.estimation === currentCardValue;
    }
  },
  computed: {
    name: {
      get() {
        return this.$store.state.participant.name;
      },
      set(value) {
        this.$store.commit("participant/SET_PARTICIPANT_NAME", value);
      }
    },
    estimation: {
      get() {
        return this.$store.state.participant.estimation;
      },
      set(value) {
        this.$store.commit("participant/SET_PARTICIPANT_ESTIMATION", value);
      }
    },
    roomId: {
      get() {
        return this.$store.state.room.id;
      }
    }
  }
};
</script>

<style scoped>
.poker-card__container {
  float: left;
  padding: 10px 30px;
}
.poker-card__body {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #8ec6b5;
  transition: 0.3s;

  width: 130px;
  padding: 70px 50px;

  text-align: center;
  font-size: 20px;
}
.poker-card__body:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.poker-card--selected {
  background-color: #c66c62;
}
</style>
