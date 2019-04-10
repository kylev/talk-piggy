<template>
  <div id="app">
    <TopBar />
    <MainPanel />
    <SpeakerList />
  </div>
</template>

<script>
import MainPanel from "./components/MainPanel.vue";
import SpeakerList from "./components/SpeakerList.vue";
import TopBar from "./components/TopBar.vue";

export default {
  name: "app",
  components: {
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
