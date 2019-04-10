<template>
  <b-card v-bind:title="speaker.name">
    <b-card-text>
      <TimeDisplay v-bind:time="speaker.speakingSeconds" />
    </b-card-text>
    <b-button
      v-on:click="$emit('toggle')"
      v-bind:pressed="speaker.isSpeaking"
      variant="outline-primary"
    >
      Talking
    </b-button>
  </b-card>
</template>

<script>
import TimeDisplay from "./TimeDisplay.vue";

export default {
  props: ["speaker"],
  components: {
    TimeDisplay
  }
};
</script>
