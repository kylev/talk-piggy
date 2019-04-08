<template>
  <div class="container" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SpeakerList />
  </div>
</template>

<script>
import SpeakerList from "./components/SpeakerList.vue";

export default {
  name: "app",
  components: {
    SpeakerList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
