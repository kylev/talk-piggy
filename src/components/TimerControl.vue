<template>
  <section>
    <b-button v-if="!running" v-on:click="startTimer">Start</b-button>
    <b-button v-if="running" v-on:click="stopTimer">Stop</b-button>
    <TimeDisplay v-bind:time="time" />
  </section>
</template>

<script>
import { mapActions } from "vuex";

import TimeDisplay from "./TimeDisplay.vue";

export default {
  components: { TimeDisplay },
  methods: {
    ...mapActions(["startTimer", "stopTimer"])
  },
  computed: {
    running() {
      return this.$store.state.tickTimer !== null;
    },
    time() {
      return this.$store.state.tickSeconds;
    }
  }
};
</script>
