<template>
  <div id="app">
    <TopBar />
    <MainPanel />
    <SpeakerList />
    <AddSpeaker />
  </div>
</template>

<script>
import AddSpeaker from "./components/AddSpeaker.vue";
import MainPanel from "./components/MainPanel.vue";
import SpeakerList from "./components/SpeakerList.vue";
import TopBar from "./components/TopBar.vue";

export default {
  name: "app",
  components: {
    AddSpeaker,
    MainPanel,
    SpeakerList,
    TopBar
  }
};
</script>

<style>
#app {
}
</style>
