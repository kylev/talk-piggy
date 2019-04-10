<template>
  <section>
    <b-button v-if="!running" v-on:click="startTimer" variant="light">
      Start
    </b-button>
    <b-button v-if="running" v-on:click="stopTimer">Pause</b-button>
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
