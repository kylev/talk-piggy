<template>
  <div id="app">
    <TopBar />
    <MainPanel />
    <SpeakerList />
  </div>
</template>

<script setup lang="ts">
import MainPanel from './components/MainPanel.vue'
import SpeakerList from './components/SpeakerList.vue'
import TopBar from './components/TopBar.vue'
</script>
