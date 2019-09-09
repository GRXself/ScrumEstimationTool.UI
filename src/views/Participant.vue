<template>
  <div>
    <h2>Participant</h2>

    <div>
      <div class="participant-panel" style="border-right: 5px solid">
        Current room id:
        <p id="roomId-show"></p>
      </div>

      <div class="participant-panel">
        <form>
          Your Name:
          <input id="participant-name" type="text" />
          <br />Your Current Estimation:
          <text id="participant-estimation"></text>
          <br />
          <input type="button" onclick="submitEstimation()" value="Submit" />
        </form>
      </div>

      <div></div>
    </div>

    <div>Click the card below giving a quick estimation:</div>
    <div width="100%">
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          1
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          2
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          3
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          5
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          8
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          666
        </div>
      </div>
      <div class="poker-card__container">
        <div class="poker-card__body" onclick="pokerCardOnSelected(this)">
          0
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Participant"
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #c66c62;
  transition: 0.3s;

  width: 130px;
  padding: 70px 50px;

  text-align: center;
  font-size: 20px;
}

.participant-panel {
  float: left;
  padding: 30px;
  width: 50%;
}
</style>
