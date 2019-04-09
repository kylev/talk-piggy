<template>
  <div id="app">
    <TimerControl />
    <SpeakerList />
    <AddSpeaker />
  </div>
</template>

<script>
import AddSpeaker from "./components/AddSpeaker.vue";
import SpeakerList from "./components/SpeakerList.vue";
import TimerControl from "./components/TimerControl.vue";

export default {
  name: "app",
  components: {
    AddSpeaker,
    SpeakerList,
    TimerControl
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
