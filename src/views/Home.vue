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
        <input id="roomId-given" type="text" />
        <br />
        <input type="button" value="Get this room!" onclick="createRoom()" />
      </div>

      <div class="page-panel">
        <h3>Participant:</h3>
        Join a room? <br />Room Id:
        <input id="roomId-join" type="text" />
        <br />
        <input type="button" value="Join!" onclick="joinRoom()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped></style>
