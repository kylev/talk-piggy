<template>
  <section>
    <b-button v-if="!isRunning" v-on:click="startTimer" variant="light">
      Start
    </b-button>
    <b-button v-if="isRunning" v-on:click="stopTimer">Pause</b-button>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { usePrimaryStore } from "@/stores/primary";

export default {
  methods: {
    ...mapActions(usePrimaryStore, ["startTimer", "stopTimer"])
  },
  computed: {
    ...mapState(usePrimaryStore, ["isRunning"])
  }
};
</script>
