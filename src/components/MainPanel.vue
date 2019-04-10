<template>
  <b-container class="py-md-2">
    <b-row>
      <b-col class="text-center">
        <b-card title="Total">
          <TimeDisplay v-bind:time="totalTime" class="h1" />
        </b-card>
      </b-col>
      <b-col class="text-center">
        <b-card title="Crosstalk">
          <TimeDisplay v-bind:time="crossTime" class="h1" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

import TimeDisplay from "./TimeDisplay.vue";

export default {
  components: { TimeDisplay },
  computed: {
    ...mapState({
      totalTime: state => state.tickSeconds,
      crossTime: state => state.crosstalkSeconds
    })
  }
};
</script>
