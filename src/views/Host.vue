<template>
  <div>
    <h2>Host</h2>

    <div class="host-panel" style="border-right: 5px solid">
      <div>
        Current room id:
        <p id="roomId-show"></p>
      </div>

      <div>
        <a type="button" onclick="getCurrentEstimationResult()"
          >&nbsp; Show estimations &nbsp;</a
        >
        <a type="button" onclick="reset()">&nbsp; Reset &nbsp;</a>
      </div>

      <div>
        Estimation Result:
        <p id="estimation-result-content">There is the result.</p>
      </div>
    </div>

    <div class="host-panel">
      Share the link below to join the room:
      <br />
      <input class="link-show" type="text" id="room-link" />
      <br />
      <button onclick="copySharedLink()">Copy</button>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Host"
};
</script>

<style scoped>
.host-panel {
  float: left;
  padding: 30px;
  width: 40%;
}

.link-show {
  width: 100%;
}
</style>
