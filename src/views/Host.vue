<template>
  <div>
    <h2>Host</h2>

    <div>
      <div class="page-panel" style="border-right: 5px solid">
        <div>
          Current room id:
          <p id="roomId-show"></p>
        </div>

        <div>
          <input
            type="button"
            onclick="getCurrentEstimationResult()"
            value="Show estimations"
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" onclick="reset()" value="Reset" />
        </div>

        <div>
          Estimation Result:
          <p id="estimation-result-content">There is the result.</p>
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
export default {
  name: "Host"
};
</script>

<style scoped>
.link-show {
  width: 90%;
}
</style>
