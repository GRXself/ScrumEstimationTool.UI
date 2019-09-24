<template>
  <div>
    Current room id:
    <p>{{ roomId }}</p>
  </div>
</template>

<script>
export default {
  name: "RoomIdDisplay",
  computed: {
    roomId() {
      return this.$store.state.room.id;
    }
  }
};
</script>

<style></style>
