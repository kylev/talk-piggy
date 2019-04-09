<template>
  <section>
    <b-button v-if="!running" v-on:click="startTimer">Start</b-button>
    <b-button v-if="running" v-on:click="stopTimer">Stop</b-button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["startTimer", "stopTimer"])
  },
  computed: {
    running() {
      return this.$store.state.tickTimer !== null;
    }
  }
};
</script>
