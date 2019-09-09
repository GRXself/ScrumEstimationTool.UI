<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/host">Host</router-link>&nbsp;|
      <router-link to="/participant">Participant</router-link>&nbsp;|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page-panel {
  float: left;
  width: 40%;
  max-width: 40%;
  padding-left: 8%;
  padding-right: 1%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}
</style>
