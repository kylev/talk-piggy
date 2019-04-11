<template>
  <b-card
    @click="$emit('toggle')"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :body-bg-variant="color"
  >
    <b-card-title>
      {{ speaker.name }}
      <b-dropdown right :variant="color || 'white'" class="float-right">
        <b-dropdown-item @click="$emit('remove')">
          Remove
        </b-dropdown-item>
      </b-dropdown>
    </b-card-title>
    <b-card-text>
      <TimeDisplay v-bind:time="speaker.speakingSeconds" />
    </b-card-text>
  </b-card>
</template>

<script>
import TimeDisplay from "./TimeDisplay.vue";

export default {
  props: ["speaker"],
  components: {
    TimeDisplay
  },
  data() {
    return {
      hover: false
    };
  },
  computed: {
    color() {
      if (this.speaker.isSpeaking) return "primary";
      else return this.hover ? "light" : null;
    }
  }
};
</script>
